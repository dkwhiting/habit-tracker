import { View, Text } from 'react-native';
import React from 'react';
import ScoreboardCol from './ScoreboardCol';

const ScoreboardRow = ({ player, rounds }) => {
	return (
		<View style={{ display: 'flex', flexDirection: 'row' }}>
			<View style={{ flex: 1 }}>
				<Text style={{ width: 120 }}>{player.name}</Text>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', flex: 0 }}>
				{rounds.map((round, index) => {
					return (
						<ScoreboardCol
							rounds={rounds}
							score={player.score[index]}
							key={index}
							index={index}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default ScoreboardRow;
