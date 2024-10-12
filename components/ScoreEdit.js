import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import NumPad from "./NumPad";
import { useUpdateRoundScoreMutation } from "../store/apiSlice";

const ScoreEdit = ({ route, navigation }) => {
    const {roundKey, playerKey, game} = route.params;
    console.log(playerKey)
    const [newScore, setNewScore] = useState(
        game.scores[roundKey]?.[playerKey] !== undefined ? game.scores[roundKey][playerKey].toString() : '0'
      );    
    const [negativeNum, setNegativeNum] = useState(false)
    const [
		updateRoundScore, // This is the mutation trigger
		{ isLoading: isUpdating }, // This is the destructured mutation result
	] = useUpdateRoundScoreMutation();

    const handleSubmit = () => {
        const body = {
            ownerId: game.ownerId,
            gameId: game.id,
            playerKey,
            roundKey,
            newScore
        }
        updateRoundScore(body)
        console.log(body)
    }

    return (
        <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
            <View style={{display:'flex',flexGrow:1,justifyContent:'center',alignItems:'center',paddingHorizontal:16}}>
                <Text style={{fontSize:80}} adjustsFontSizeToFit numberOfLines={1}>
                    {negativeNum ? '-' : ''}{newScore}
                </Text>
            </View>
            <TouchableOpacity 
                style={{backgroundColor: 'rgb(6, 214, 160)', height:40, display:'flex', justifyContent:'center', alignItems:'center'}}
                onPress={()=>handleSubmit()}
            >
                <Text style={{fontSize:23, color:'white'}}>Submit</Text>
            </TouchableOpacity>
            <NumPad newScore={newScore} setNewScore={setNewScore} negativeNum={negativeNum} setNegativeNum={setNegativeNum} />
      </View>
    )
}

export default ScoreEdit;