import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScoreboardRow from './ScoreboardRow';

const Scoreboard = ({ game }) => {
	const [rounds, setRounds] = useState([]);

	useEffect(() => {
		const highest = [...game.players].sort(
			(a, b) => b.score.length - a.score.length
		)[0].score;
		setRounds(highest);
	}, [game]);

	return (
		<View>
			{game.players.map((player, index) => {
				return (
					<ScoreboardRow
						key={index}
						rounds={rounds}
						player={player}
					/>
				);
			})}
		</View>
	);
};

export default Scoreboard;
