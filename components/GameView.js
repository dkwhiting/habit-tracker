import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Scoreboard from "./Scoreboard";
import ScoreEdit from "./ScoreEdit";

const GameView = ({game}) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GameView"
                children={() => <Scoreboard game={game} />}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ScoreEdit"
                component={ScoreEdit}
                options={({ navigation, route }) => ({
                    presentation: 'modal',
                    title: `Round ${route.params?.roundIndex + 1}: ${route.params?.game.players[route.params?.playerKey] || 'Player'}`,
                })}
            />
        </Stack.Navigator>
    )
}

export default GameView;