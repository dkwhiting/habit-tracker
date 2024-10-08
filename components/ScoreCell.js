import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"

const ScoreCell = ({round, player, style}) => {
    const [innerText, setInnerText] = useState(player.score[round] ? player.score[round] : '-')
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={style}
            onPress={() => {
				navigation.navigate('ScoreEdit', {round: round, player: player });
			}}
        >
            <Text style={{fontSize:20, textAlign:'center'}}>{innerText}</Text>
        </TouchableOpacity>
   )
}

const styles = StyleSheet.create({

})

export default ScoreCell