import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { Text } from 'react-native-paper'

function Profile() {
    const navigation = useNavigation();
  return (
    <>
    <Text>Profile</Text>
    <Pressable onPress={()=>navigation.navigate("Home" as never)} >
        <Text>Home</Text>
    </Pressable>
    {/* <Link  href='(auth)/home'>Home</Link> */}
    </>
  )
}

export default Profile