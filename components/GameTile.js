import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../data'
import { Icon } from 'react-native-elements'

const GameTile = ({game, index, expandedTile, setExpandedTile}) => {
  return (

    <Pressable 
      style={{backgroundColor: colors[index], borderRadius: 10}} 
      onPress={()=>setExpandedTile(game.id)}
    >
      <View style={styles.activityTile}>
        <Text>{game.name}</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name='groups'
            type='material-icons'
            color='white'
            />
          <Text> {game.players.length}</Text>
        </View>
      </View>
      {expandedTile === game.id
      ? 
        <View style={{display: 'flex', flexDirection: 'column', paddingLeft: 10, paddingBottom: 10}}>
          {game.players.sort((a, b)=>{
            if (game.highestWins){
              return b.score-a.score
            }
            return a.score-b.score
          })
          .slice(0, 3)
          .map((player, index)=>{
            return (
              <View style={{display: 'flex', flexDirection: 'row'}}>
                {index === 0
                ? <Icon reverse name='trophy' type='font-awesome' color='red' />
                : index === 1
                ? <Icon name='trophy' type='font-awesome' color='blue' />
                : index === 2
                ? <Icon name='trophy' type='font-awesome' color='green' />
                : null}
                <Text>{player.name}</Text>
              </View>
            )
          })}

        </View>
        
      : null
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  colorContainer: {
    marginTop: 50,
  },
  activityTile: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%'
  }
});


export default GameTile