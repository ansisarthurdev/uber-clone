import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

//maps api
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '@env';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectOrigin, selectDestination, setTravelTimeInformation} from '../app/slices/navSlice';

import { Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/core';
 
const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();

    //coordinates
    const originCoords = {latitude: origin?.center[1], longitude: origin?.center[0]};
    const destinationCoords = {latitude: destination?.center[1], longitude: destination?.center[0]};
    const mapRef = useRef(null);

    useEffect(() => {
        if(!origin || !destination) return;

        //zoom and fit to markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
        })
    }, [origin, destination])

    const navigation = useNavigation();

    useEffect(() => {
        if(!origin || !destination) return;

        const getTravelTime = async() => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric
            &origins=${origin.place_name}&destinations=${destination.place_name}&key=${GOOGLE_API_KEY}`;

            fetch(URL).then(res => res.json()).then(
                data => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                }
            ).catch(error => console.log(error))
        }

        getTravelTime();
    }, [GOOGLE_API_KEY, origin, destination]);

    return (
        <Container>
            <MapView 
                ref={mapRef}
                style={{flex: 1}} 
                mapType='mutedStandard'
                initialRegion={{
                    latitude: origin?.center[1],
                    longitude: origin?.center[0],
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >

            {origin && destination && (
                <MapViewDirections
                  origin={originCoords}
                  destination={destinationCoords}
                  apikey={GOOGLE_API_KEY}
                  strokeWidth={3}
                  strokeColor='black'
                />
            )}
            
            {origin?.center && (
                <Marker
                    coordinate={{
                        latitude: origin?.center[1],
                        longitude: origin?.center[0],
                    }}
                    title={origin?.place_name}
                    identifier='origin'
                />
            )
            }

            {destination?.center && (
                <Marker
                    coordinate={{
                        latitude: destination?.center[1],
                        longitude: destination?.center[0],
                    }}
                    title={destination?.place_name}
                    identifier='destination'
                />
            )
            }
            </MapView>

            <Container style={{
                position: 'absolute',
                right: 30,
                top: 40,
                backgroundColor: 'black',
                borderRadius: 50,
                padding: 4
            }}>
                <Icon onPress={() => navigation.navigate('Home')}
                    name='menu'
                    type='Entypo'
                    color='white'
                    width='10px'
                    style={{ width: 30, height: 30}}
                />
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({
    map: {
        display: 'flex',
    }    
})

const Container = styled.View`
flex: 1;
`

export default Map
