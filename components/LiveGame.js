import { View, Text } from 'react-native';
import React from 'react';

const LiveGame = ({ route, navigation }) => {
	const { game } = route.params;
	console.log(game);
	return (
		<View>
			<Text>{game.name}</Text>
		</View>
	);
};

export default LiveGame;
