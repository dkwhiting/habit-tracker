import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"

const ScoreCell = ({round, player, i, style}) => {
    return (
        <TouchableOpacity 
        key={i} 
        style={style}>
            <Text style={{fontSize:20, textAlign:'center'}}>{player.score[round] ? player.score[round] : '-'}</Text>
        </TouchableOpacity>
   )
}

const styles = StyleSheet.create({

})

export default ScoreCell