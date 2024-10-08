import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scoreboard from './Scoreboard';
import GameView from './GameView';
import Timer from './Timer';

const Tab = createBottomTabNavigator();

const LiveGame = ({ route }) => {
	const { game } = route.params;
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Scoreboard"
				children={() => <GameView game={game} />}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Timer"
				component={Timer}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default LiveGame;
