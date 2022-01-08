import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

//components
import NavOptions from '../components/NavOptions';
import SearchInput from '../components/SearchInput';
import UserDefaults from '../components/UserDefaults';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Image 
                style={{width: 130, height: 40, resizeMode: 'contain', marginTop: 60, marginLeft: 20}}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'}}
            />

            <SearchInput/>
            <NavOptions />
            <UserDefaults />
        </SafeAreaView>
    )
}

export default HomeScreen

const Image = styled.Image``