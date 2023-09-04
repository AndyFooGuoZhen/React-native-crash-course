import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useUser, useAuth } from '@clerk/clerk-expo';

export const LogoutButton = () => {
    const { signOut } = useAuth();
  
    const doLogout = () => {
      signOut();
    };
  
    return (
      <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
        <Text>Sign out</Text>
      </Pressable>
    );
  };

const Home = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <Text>{user?.id}</Text>
      <LogoutButton/>
     
    </View>
  );
};

export default Home;