import React from 'react'

//navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//screens
import HomeScreen from '../screens/HomeScreen';

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
