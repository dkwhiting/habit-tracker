import { View, Text } from 'react-native';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { ListItem } from '@rneui/themed-edge';
import { colorCalc, colors } from '../data';

const PlayerSelectTile = ({ index, player, players, setPlayers }) => {
	console.log('PLAYER', player)
	const handleRemovePlayer = () => {
		let newList = [...players].filter((x) => x.id !== player.id);
		newList.forEach(
			(player) => (player.color = colors[colorCalc(players[index - 1])])
		);
		setPlayers(newList);
	};

	return (
		<ListItem.Swipeable
			containerStyle={{ padding: 0, borderRadius: 10 }}
			minSlideWidth={30}
			rightContent={(reset) => (
				<Button
					title="Remove"
					onPress={() => {
						reset();
						handleRemovePlayer();
					}}
					// icon={{ name: 'delete', color: 'white' }}
					buttonStyle={{
						minHeight: '100%',
						backgroundColor: 'red',
						borderRadius: 10,
						marginLeft: 6,
					}}
				/>
			)}
		>
			<View
				style={{
					backgroundColor: `rgb(${player.color})`,
					width: '100%',
					height: 50,
					borderRadius: 10,
					padding: 5,
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'start',
					gap: 10,
				}}
			>
				<View
					style={{
						backgroundColor: 'white',
						width: 40,
						height: 40,
						borderRadius: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
					}}
				>
					<Icon
						name={player.icon.name}
						type={player.icon.type}
						color="#000"
					/>
				</View>
				<Text>{player.name}</Text>
			</View>
		</ListItem.Swipeable>
	);
};

export default PlayerSelectTile;
