import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

//components
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <Container>
            <MapTop>
                <Map />
            </MapTop>
            <MapBottom>
                <Text>This is Map Screen Bottom!</Text>
            </MapBottom>   
        </Container>
    )
}

export default MapScreen

const MapTop = styled.View`
height: 50%;
`
const MapBottom = styled.View`
height: 50%;
`
const Container = styled.View``
const Text = styled.Text``