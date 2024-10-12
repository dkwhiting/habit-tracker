import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scoreboard from './Scoreboard';
import GameView from './GameView';
import Timer from './Timer';
import { UserContext } from './Main';
import { useFetchSingleGameQuery } from '../store/apiSlice';

const Tab = createBottomTabNavigator();

const LiveGame = ({ route }) => {
	const user = useContext(UserContext);
	const gameId = route.params.gameId
	const {
		data: game,
		isError,
		error,
		isLoading: gamesLoading,
	} = useFetchSingleGameQuery({userId: user.uid, gameId});
	if (gamesLoading){
		return (
			<Text>Loading...</Text>
		)
	}
	if (isError) {
		console.error(error)
		return
	}
	if (game) {
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
	}
};

export default LiveGame;
