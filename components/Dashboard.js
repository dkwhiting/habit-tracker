import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const activities = [
  {
    name: 'Exercise',
    icon: null,
    habitType: 'build',
    goal: 30,
    unit: 'minutes'
  },
  {
    name: 'Alcohol',
    icon: null,
    habitType: 'quit',
    goal: 6,
    unit: 'drinks'
  },
  {
    name: 'Drink Water',
    icon: null,
    habitType: 'build',
    goal: 8,
    unit: 'glasses'
  }
]

const colors = [
  '#06d6a0',
  '#ef476f',
  '#1b9aaa',
  '#ffc43d'
]

const Dashboard = () => {
  return (
    <View>
      <ScrollView>
        {activities.map((activity, i) =>{
          return(
            <View style={{backgroundColor: colors[i]}}>
              <View key={i} style={styles.activityTile}>
                <Text>{activity.name}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  activityTile: {
    margin: 10
  }
});


export default Dashboard