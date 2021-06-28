import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MainScreen from './src/Screens/MainScreen'

function App(){
  return(
    <View style={styles.container}>
      <MainScreen title="This is main screen"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;