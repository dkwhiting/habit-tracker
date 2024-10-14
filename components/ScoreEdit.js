import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import NumPad from "./NumPad";
import { useUpdateRoundScoreMutation } from "../store/apiSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { isLoaded } from "expo-font";
import LoadingModal from "./LoadingModal";

const ScoreEdit = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {roundKey, playerKey, game} = route.params;
    const [newScore, setNewScore] = useState(
        game.scores[roundKey]?.[playerKey] !== undefined ? game.scores[roundKey][playerKey].toString() : '0'
      );    
    const [negativeNum, setNegativeNum] = useState(false)
    const [count, setCount] = useState(0);
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
            newScore: Number(negativeNum ? newScore * -1 : newScore), // Convert to number if needed
        };
        try {
            const result = await updateRoundScore(body).unwrap(); // Use unwrap to handle errors properly
            navigation.pop();
        } catch (error) {
            console.error('Failed to update round score:', error);
            // Optionally show an error message to the user
        }
    };

    return (
        <>
        {isUpdating ? <LoadingModal /> : null}
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
                <NumPad 
                    newScore={newScore} 
                    setNewScore={setNewScore} 
                    negativeNum={negativeNum} 
                    setNegativeNum={setNegativeNum} 
                    count={count} 
                    setCount={setCount} 
                />
            </View>
        </>
    )
}

export default ScoreEdit;