import { Stack } from "expo-router"
import Second from "./Second";

const StackLayout = ()=>{
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Second"></Stack.Screen>
        </Stack>
    )
}

export default StackLayout;