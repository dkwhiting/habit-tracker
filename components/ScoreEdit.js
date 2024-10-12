import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import NumPad from "./NumPad";
import { useUpdateRoundScoreMutation } from "../store/apiSlice";
import { useRoute } from "@react-navigation/native";

const ScoreEdit = ({ route, navigation }) => {
    const {roundKey, playerKey, game} = route.params;
    console.log('SCORE EDIT GAME', game)
    const [newScore, setNewScore] = useState(
        game.scores[roundKey]?.[playerKey] !== undefined ? game.scores[roundKey][playerKey].toString() : '0'
      );    
    const [negativeNum, setNegativeNum] = useState(false)
    const [
		updateRoundScore, // This is the mutation trigger
		{ isLoading: isUpdating }, // This is the destructured mutation result
	] = useUpdateRoundScoreMutation();

    const handleSubmit = async () => {
        const body = {
            ownerId: game.ownerId,
            gameId: game.gameId,
            playerKey,
            roundKey,
            newScore: Number(newScore), // Convert to number if needed
        };
        console.log('BODY', body)
        try {
            const result = await updateRoundScore(body).unwrap(); // Use unwrap to handle errors properly
            console.log('Updated game data:', result); // This can help you debug the updated game data
            navigation.pop();
        } catch (error) {
            console.error('Failed to update round score:', error);
            // Optionally show an error message to the user
        }
    };
    

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