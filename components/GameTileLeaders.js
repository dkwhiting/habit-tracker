import { View, Text } from 'react-native';
import React from 'react';
import GoldMedal from '../assets/svgs/GoldMedal';
import SilverMedal from '../assets/svgs/SilverMedal';
import BronzeMedal from '../assets/svgs/BronzeMedal';

const GameTileLeaders = ({ player, index }) => {
	return (
		<View
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.2);',
				display: 'flex',
				flexDirection: 'row',
				width: 'auto',
				flex: 1,
				gap: 5,
				alignItems: 'center',
				borderRadius: 10,
				padding: 5,
			}}
		>
			{index === 0 ? (
				<View
					style={{
						width: 35,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<GoldMedal />
				</View>
			) : index === 1 ? (
				<View
					style={{
						width: 35,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<SilverMedal />
				</View>
			) : index === 2 ? (
				<View
					style={{
						width: 35,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<BronzeMedal />
				</View>
			) : null}
			<Text>{player.name}</Text>
			<Text style={{ flex: 1, textAlign: 'right' }}>
				{player.score.reduce(function (a, b) {
					return a + b;
				}, 0)}
			</Text>
		</View>
	);
};

export default GameTileLeaders;
