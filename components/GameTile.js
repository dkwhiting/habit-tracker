import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { colorCalc, colors } from '../data';
import { Button, Icon } from 'react-native-elements';
import GameTileLeaders from './GameTileLeaders';

const GameTile = ({ game, index, expandedTile, setExpandedTile }) => {
	const expandAnim = useRef(new Animated.Value(50)).current;
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const gamePlayers = [...game.players];

	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		if (game.players.length >= 3) {
			Animated.timing(expandAnim, {
				toValue: 225,
				duration: 300,
				useNativeDriver: false,
			}).start();
		} else if (game.players.length === 2) {
			Animated.timing(expandAnim, {
				toValue: 190,
				duration: 300,
				useNativeDriver: false,
			}).start();
		} else {
			Animated.timing(expandAnim, {
				toValue: 155,
				duration: 300,
				useNativeDriver: false,
			}).start();
		}

		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 600,
			useNativeDriver: false,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(expandAnim, {
			toValue: 50,
			duration: 300,
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

	return (
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
					<Text>{game.name}</Text>
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
						<Text> {game.players.length}</Text>
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
						<Text style={{ flex: 1 }}>{game.created}</Text>
						<Text style={{ flex: 1 }}>Last Played:</Text>
					</View>
					{gamePlayers
						.sort((a, b) => {
							if (game.highestWins) {
								return b.score - a.score;
							}
							return a.score - b.score;
						})
						.slice(0, 3)
						.map((player, index) => {
							return (
								<GameTileLeaders
									key={index}
									player={player}
									index={index}
								/>
							);
						})}
					<Button
						title="Resume Game"
						color="black"
					/>
				</Animated.View>
			</Animated.View>
		</Pressable>
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
