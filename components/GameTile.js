import { View, Text, StyleSheet, Pressable, Animated, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { colorCalc, colors } from '../data';
import { Button, Icon } from 'react-native-elements';
import GameTileLeaders from './GameTileLeaders';
import { dateToString } from '../utils';
import { ListItem } from '@rneui/themed-edge';
import { UserContext } from './Main';
import { useNavigation } from '@react-navigation/native';
import useSortPlayersByScore from '../hooks/useSortPlayersByScore';

const GameTile = ({
	game,
	index,
	expandedTile,
	setExpandedTile,
	deleteGame,
}) => {
	const expandAnim = useRef(new Animated.Value(50)).current;
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const sortedPlayers = useSortPlayersByScore(game)
	const date = new Date();
	const today = date.toISOString().slice(0, 10).replace(/-/g, '');
	const tomorrow = date.toISOString().slice(0, 10).replace(/-/g, '') + 1;
	const user = useContext(UserContext);
	const navigation = useNavigation();
	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		if (Object.entries(game.players).length >= 3) {
			Animated.timing(expandAnim, {
				toValue: 225,
				duration: 200,
				useNativeDriver: false,
			}).start();
		} else if (Object.entries(game.players).length === 2) {
			Animated.timing(expandAnim, {
				toValue: 190,
				duration: 200,
				useNativeDriver: false,
			}).start();
		} else {
			Animated.timing(expandAnim, {
				toValue: 155,
				duration: 200,
				useNativeDriver: false,
			}).start();
		}

		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 200,
			useNativeDriver: false,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(expandAnim, {
			toValue: 45,
			duration: 200,
			useNativeDriver: false,
		}).start();

		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 200,
			useNativeDriver: false,
		}).start();
	};

	useLayoutEffect(() => {
		if (expandedTile === game.id) {
			fadeIn();
		} else {
			fadeOut();
		}
	}, [expandedTile]);

	const handleDelete = () => {
		try {
			deleteGame({ userId: user.uid, gameId: game.id });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ListItem.Swipeable
			containerStyle={{ padding: 0, borderRadius: 10 }}
			// leftContent={(reset) => (
			// 	<Button
			// 		title="Info"
			// 		onPress={() => reset()}
			// 		icon={{ name: 'info', color: 'white' }}
			// 		buttonStyle={{ minHeight: '100%', borderRadius: 10, marginRight: 6 }}
			// 	/>
			// )}
			rightContent={(reset) => (
				<Button
					title="Delete"
					onPress={() => {
						reset();
						handleDelete();
					}}
					icon={{ name: 'delete', color: 'white' }}
					buttonStyle={{
						height: 45,
						backgroundColor: '#FF3B30',
						borderRadius: 10,
						marginLeft: 6,
					}}
				/>
			)}
		>
			<Pressable
				style={{
					backgroundColor: `rgb(${colors[colorCalc(index)]})`,
					borderRadius: 10,
					overflow: 'hidden',
				}}
				onPress={() => {
					if (expandedTile !== game.id) {
						setExpandedTile(game.id);
					} else {
						setExpandedTile(null);
					}
				}}
			>
				<Animated.View style={{ height: expandAnim }}>
					<View
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.075)',
							width: 500,
							height: 500,
							transform: 'rotate(135deg)',
							zIndex: -999,
							position: 'absolute',
							left: -350,
							top: -300,
						}}
					/>
					<View
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.075)',
							width: 500,
							height: 500,
							transform: 'rotate(135deg)',
							zIndex: -999,
							position: 'absolute',
							right: -375,
							bottom: -400,
						}}
					/>
					<View style={styles.activityTile}>
						<Text style={{fontSize:16}}>{game.name}</Text>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Icon
								name="groups"
								type="material-icons"
								color="white"
							/>
							<Text> {Object.entries(game.players).length}</Text>
						</View>
					</View>
					<Animated.View
						style={{
							display: 'flex',
							flex: 1,
							flexDirection: 'column',
							paddingLeft: 10,
							paddingBottom: 10,
							paddingRight: 10,
							gap: 5,
							opacity: fadeAnim,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								paddingBottom: 5,
								width: '80%',
							}}
						>
							<Text style={{ flex: 1 }}>
								Created:{' '}
								{game.created === today
									? 'Today'
									: game.created === tomorrow
									? 'Tomorrow'
									: dateToString(game.created)}
							</Text>
							<Text style={{ flex: 1 }}>Last Played:</Text>
						</View>
						{Object.entries(sortedPlayers)
							.slice(0, 3) // Take the top 3 players
							.map(([key, player], index) => { // Destructure key and player
								return (
								<GameTileLeaders
									key={key} // Use the player key as the unique key
									playerKey={key} // Pass the player key (e.g., player_1) to your component
									player={player} // Also pass the player data if needed
									index={index}
									scores={game.scores}
								/>
								);
							})}
							<TouchableOpacity
								style={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10, backgroundColor:'rgba(255,255,255,.5)'}}
								title="Resume Game"
								onPress={() => navigation.navigate('LiveGame', { game, gameId: game.gameId })}
							>
								<Text style={{}}>Resume Game</Text>
							</TouchableOpacity>
					</Animated.View>
				</Animated.View>
			</Pressable>
		</ListItem.Swipeable>
	);
};

const styles = StyleSheet.create({
	colorContainer: {
		marginTop: 50,
	},
	activityTile: {
		margin: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '95%',
	},
});

export default GameTile;
