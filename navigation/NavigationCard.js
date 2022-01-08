import React from 'react'

import { KeyboardAvoidingView } from 'react-native';

//navigation
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

//screens
import DestinationScreen from '../screens/DestinationScreen';
import RidesScreen from '../screens/RidesScreen';

const StackNavigator = () => {

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
        <Stack.Navigator>
            <Stack.Screen 
                name="Destination" 
                component={DestinationScreen} 
                options={{
                    headerShown: false,
                    //stack slīdošā animācija
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
            <Stack.Screen 
                name="Rides"
                component={RidesScreen} 
                options={{
                    headerShown: false,
                    //stack slīdošā animācija
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
        </Stack.Navigator>
        </KeyboardAvoidingView>
    )
}

export default StackNavigator
