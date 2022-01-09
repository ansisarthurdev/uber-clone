import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/core';

const EatsScreen = () => {

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Home');
    }, 3000)

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'https://www.pngrepo.com/png/91430/180/fast-food.png'
                }}
            />
            <Image 
                style={{width: 40, height: 30, resizeMode: 'contain', marginBottom: 50}}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'}}
            />
            <Text>Uber (clone) food is still in development progress.</Text>
            <Text>Redirecting you back to Home in 3 seconds!</Text>
        </SafeAreaView>
    )
}

export default EatsScreen

const Image = styled.Image``
const Text = styled.Text``