import { View, Text } from 'react-native'
import React from 'react'
import { Iconify } from 'react-native-iconify'

const PlayerSelectTile = ({player}) => {
  return (
    <View style={{backgroundColor: `rgb(${player.color})`, width: '100%', height: 50, borderRadius: 10, padding: 5, alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: 10}}>
      <View style={{backgroundColor: 'white', width: 40, height: 40, borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {player.icon}
      </View>
      <Text>{player.name}</Text>
    </View>
  )
}

export default PlayerSelectTile