import Monicon from '@monicon/native';
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from 'react-native'

const NumPad = ({newScore, setNewScore, negativeNum, setNegativeNum}) => {
    const appendNum = (num) => {
        const numString = newScore.toString()
        if (numString.length >= 12){
            return
        }
        setNewScore(prevNumber => parseInt(prevNumber.toString() + num));
    };

    const backspace = () => {
        const numString = newScore.toString()
        if ((numString[0] === '-' && numString.length === 2) || numString.length === 1){
            setNewScore(0)
        } else {
            setNewScore(numString.slice(0, numString.length - 1))
        }
    }

    const buttonSize = Math.floor(Dimensions.get('window').width / 3);

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(1)}
            >
                <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(2)}
            >
                <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={() => appendNum(3)}
            >
                <Text style={styles.number}>3</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(4)}
            >
                <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(5)}
            >
                <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={() => appendNum(6)}
            >
                <Text style={styles.number}>6</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(7)}
            >
                <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={() => appendNum(8)}
            >
                <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={() => appendNum(9)}
            >
                <Text style={styles.number}>9</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={()=>setNegativeNum(!negativeNum)}
            >
            <Monicon
                        name="ic:baseline-plus-minus-alt"
                        size={45}
                        color={'black'}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.rightBorder, {width: buttonSize}]}
                onPress={()=>appendNum(0)}
            >
                <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>backspace()}
            >
            <Monicon
                        name="material-symbols:backspace-rounded"
                        size={45}
                        color={'black'}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0, .2)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 0.5, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
    },
    number: {
        fontSize: 36,
    },
    rightBorder: {
        borderRightColor: 'lightgray',
        borderRightWidth: 1
    }
})

export default NumPad