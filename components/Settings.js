import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'
import { Button } from 'react-native-elements'


const Settings = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
    </View>
  )
}

export default Settings