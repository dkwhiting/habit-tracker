import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scoreboard from './Scoreboard';
import Timer from './Timer';

const Tab = createBottomTabNavigator();

const LiveGame = ({ route, navigation }) => {
	const { game } = route.params;
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Scoreboard"
				children={() => <Scoreboard game={game} />}
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
