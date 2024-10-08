import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from 'react-native'

const NumPad = ({number, setNumber}) => {


    const handleSubmit = () => {

    }

    const buttonSize = Math.floor(Dimensions.get('window').width / 3);

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 1)}
            >
                <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 2)}
            >
                <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 3)}
            >
                <Text style={styles.number}>3</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 1)}
            >
                <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 2)}
            >
                <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 3)}
            >
                <Text style={styles.number}>6</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 1)}
            >
                <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 2)}
            >
                <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 3)}
            >
                <Text style={styles.number}>9</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 1)}
            >
                <Text style={styles.number}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 2)}
            >
                <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {width: buttonSize}]}
                onPress={()=>setNumber(number => number + 3)}
            >
                <Text style={styles.number}>!</Text>
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
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
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
})

export default NumPad