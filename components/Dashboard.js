import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import GameTile from './GameTile';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const [expandedTile, setExpandedTile] = useState(null);
	const games = useSelector((state) => state.games.value);

	console.log('THIS IS GAMES', games);

	return (
		<ScrollView style={{ height: '100%' }}>
			<Text style={{ fontSize: 24, padding: 5 }}>Open Games</Text>
			<View
				style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 5 }}
			>
				{games
					.filter((game) => !game?.completed)
					.map((game, index) => {
						return (
							<GameTile
								key={game.id}
								game={game}
								index={index}
								expandedTile={expandedTile}
								setExpandedTile={setExpandedTile}
							/>
						);
					})}
			</View>
			<Text style={{ fontSize: 24, padding: 5 }}>Completed Games</Text>
			<View
				style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 5 }}
			>
				{games
					.filter((game) => game?.completed)
					.map((game, index) => {
						return (
							<GameTile
								key={game.id}
								game={game}
								index={index}
								expandedTile={expandedTile}
								setExpandedTile={setExpandedTile}
							/>
						);
					})}
			</View>
		</ScrollView>
	);
};

export default Dashboard;
