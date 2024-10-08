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
                options={({ navigation }) => ({
                    presentation: 'modal',
                    title: 'Edit Score',
                })}
            />
        </Stack.Navigator>
    )
}

export default GameView;