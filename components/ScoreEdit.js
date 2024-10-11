import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import NumPad from "./NumPad";

const ScoreEdit = ({ route, navigation }) => {
    const {round, player} = route.params;
    const inputAccessoryViewID = "button"
    const [number, setNumber] = useState(player.score[round].toString())
    const [negativeNum, setNegativeNum] = useState(false)

    const handleSubmit = () => {

    }

    return (
        <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
            <View style={{display:'flex',flexGrow:1,justifyContent:'center',alignItems:'center',paddingHorizontal:16}}>
                <Text style={{fontSize:80}} adjustsFontSizeToFit numberOfLines={1}>
                    {negativeNum ? '-' : ''}{number}
                </Text>
            </View>
            <TouchableOpacity style={{backgroundColor: 'rgb(6, 214, 160)', height:40, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:23, color:'white'}}>Submit</Text>
            </TouchableOpacity>
            <NumPad number={number} setNumber={setNumber} negativeNum={negativeNum} setNegativeNum={setNegativeNum} />
      </View>
    )
}

export default ScoreEdit;