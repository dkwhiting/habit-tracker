import React, { useState } from "react";
import {Text, View} from "react-native";
import NumPad from "./NumPad";

const ScoreEdit = ({ route, navigation }) => {
    const {round, player} = route.params;
    const inputAccessoryViewID = "button"
    const [number, setNumber] = useState(player.score[round].toString())
    const [negativeNum, setNegativeNum] = useState(true)

    const handleSubmit = () => {

    }

    return (
        <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
            <Text style={{flexGrow:1}}>
                {number}
            </Text>
            <NumPad setNumber={setNumber} />
      </View>
    )
}

export default ScoreEdit;