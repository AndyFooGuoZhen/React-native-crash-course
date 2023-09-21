
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper';
import Home, { LogoutButton } from './home';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Game from './game';
import Profile from './profile';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';



function DrawerContent({navigation}) {

    const [activeScreen, setActiveScreen] = React.useState('Home');
  
      //Needs more cleaning up for custom drawer content here
      
    return (
      <SafeAreaView className='h-full'>
          <ScrollView automaticallyAdjustKeyboardInsets={true} className='flex-col' contentContainerStyle={{justifyContent:"space-between", height:"100%", alignItems:"center"}} >
            <View className='w-full'>
            <Drawer.Item active={activeScreen=='Home'}  label="Home" onPress={() => {navigation.navigate('Home'); setActiveScreen('Home')}} />

              <Drawer.Item active={activeScreen=='Profile'}  label="Profile" onPress={() => {navigation.navigate('Profile'); setActiveScreen('Profile')}} />
              <Drawer.Item active={activeScreen=='Game'} label="Game" onPress={() => {navigation.navigate('Game'); setActiveScreen('Game')}} />
            </View>
            <View className='justify-center w-4/5'>
              <LogoutButton/>
            </View>
            </ScrollView>   
      </SafeAreaView>
    );
  }

  const InnerLayout = () => {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();
  
    return (
  
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Game" component={Game} options={{ headerRight: () => (
           <Pressable onPress={()=>navigation.navigate("Game Creation" as never)}>
                  <Ionicons name="add" size={24} color="black" />
              </Pressable>
          
            )}}/>
        <Drawer.Screen name="Profile" component={Profile} />
  
      </Drawer.Navigator>
     
    )
  }
  
  export default InnerLayout;
  