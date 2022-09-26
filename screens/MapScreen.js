import React from 'react'
import styled from 'styled-components/native';

//components
import Map from '../components/Map'
import NavigationCard from '../navigation/NavigationCard';

const MapScreen = () => {
    return (
        <Container>
            <MapTop>
                <Map />
            </MapTop>
            <MapBottom>
                <NavigationCard />
            </MapBottom>   
        </Container>
    )
}

export default MapScreen

const MapTop = styled.View`
height: 55%;
`
const MapBottom = styled.View`
height: 45%;
`
const Container = styled.View``
const Text = styled.Text``