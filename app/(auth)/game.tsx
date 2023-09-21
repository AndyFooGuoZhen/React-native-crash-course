import { useNavigation } from 'expo-router'
import React from 'react'
import { Text } from 'react-native-paper'



function Game() {
    const navigation = useNavigation();
    console.log(JSON.stringify(navigation.getState()))


  return (
    <>
    <Text>Game</Text>
    </>
  )
}

export default Game