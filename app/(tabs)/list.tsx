import { View, Text} from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { Button } from 'react-native-paper'



const list = () => {
  return (
    <View className='items-center w-full h-full justify-center'>
        <Button className='mb-5' textColor='black' mode='elevated' onPress={()=>router.push("/list/1")}>Details 1</Button>
        <Button  mode='elevated' onPress={()=>router.push("/list/2")}>Details 2</Button>

        {/* <Button title='Details 1' onPress={()=>router.push("/list/1")}/>
        <Button title='Details 2' onPress={()=>router.push("/list/2")}/> */}

      {/* <Link href={"/list/1"}>ss</Link> */}
      {/* <Link href={"/list/2"}>Link to test 2</Link> */}

    </View>
  )
}

export default list