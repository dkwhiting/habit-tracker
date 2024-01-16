import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { games, colors } from '../data'

const Dashboard = () => {
  return (
    <View>
      <ScrollView>
        {games.map((activity, i) =>{
          return(
            <View key={i} style={{backgroundColor: colors[i]}}>
              <View style={styles.activityTile}>
                <Text>{activity.name}</Text>
                <Text> {activity.players.length}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
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
    width: '95%'
  }
});


export default Dashboard