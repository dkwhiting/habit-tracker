import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import usePlayerRoundScore from "../hooks/usePlayerRoundScore";

const ScoreCell = ({game, roundKey, playerKey, style}) => {
    const navigation = useNavigation();
    const playerRoundScore = usePlayerRoundScore(game, roundKey, playerKey)

    return (
        <TouchableOpacity 
            style={style}
            onPress={() => {
                console.log('Navigating to ScoreEdit with ', game)
				navigation.navigate('ScoreEdit', {game, roundKey, playerKey});
			}}
        >
            <Text style={{fontSize:20, textAlign:'center'}}>
                {playerRoundScore}
            </Text>
        </TouchableOpacity>
   )
}

export default ScoreCell