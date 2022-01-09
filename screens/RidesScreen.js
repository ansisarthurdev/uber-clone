import React, { useState } from 'react'
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements';
import { TouchableOpacity, FlatList } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/core';

//redux
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../app/slices/navSlice';

import { NumberFormat } from '../components/NumberFormat';

const data = [
    {
        id:'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
    },
    {
        id:'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png',
    },
    {
        id:'Uber-X-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png',
    },
];

const RidesScreen = () => {

    const navigation = useNavigation();

    const [selected, setSelected] = useState(null);

    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const SURGE_CHARGE_RATE = .948;

    return (
        <Container>
            <ContainerTop style={{
                padding: 15,
                borderBottomWidth: 1,
                borderColor: '#d7d7d7'
            }}>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center'
                }}>Select a Ride - {travelTimeInformation?.distance.text}</Text>

                <TouchableOpacity style={{
                    position: 'absolute',
                    top: 15,
                    left: 10
                }}
                onPress={() => navigation.navigate('Destination')}
                >
                    <Icon 
                        name='arrowleft'
                        type='antdesign'
                        color='black'
                        width='10px'
                        style={{width: 35, height: 35}}
                    />
                </TouchableOpacity>
            </ContainerTop>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ItemContainer style={{backgroundColor: `${item.id === selected?.id ? '#E6E6EA' : 'white'}`}}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 30, paddingRight: 30,
                        alignItems: 'center'
                    }}
                    onPress={() => {setSelected(item)}}
                    >
                        <Image style={{
                            width: 75,
                            height: 75,
                            resizeMode: 'contain'
                        }} source={{ uri: item.image}}/>

                        <InfoContainer>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                        </InfoContainer>

                        <Text style={{fontSize: 15}}>
                            €{(travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                        </Text>
                    </TouchableOpacity>
                    </ItemContainer>
                )}
            />

            <TouchableOpacity
                disabled={!selected}
                style={{backgroundColor: 'black', marginLeft: 5, marginRight: 5, marginBottom: 10, padding: 10,
                    backgroundColor: `${selected ? 'black' : '#E6E6EA'}`
                }}
            ><Text
                style={{color: 'white', fontSize: 17,  textAlign: 'center'}}
            >Choose {selected?.title}</Text></TouchableOpacity>
        </Container>
    )
}

export default RidesScreen

const ItemContainer = styled.View``

const ContainerTop = styled.View``

const InfoContainer = styled.View``

const Container = styled.View`
background-color: white;
flex: 1;
`
const Image = styled.Image``

const Text = styled.Text``
