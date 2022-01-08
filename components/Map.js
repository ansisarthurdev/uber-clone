import React from 'react'
import styled from 'styled-components/native';

import MapboxGL from '@react-native-mapbox-gl/maps';
import { MAPBOX_ACCESS_TOKEN } from '@env';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})

const Map = () => {
    return (
        <Container>
            <MapboxGL.MapView style={styles.map} />
        </Container>
    )
}

const Container = styled.View``
const Text = styled.Text``

export default Map
