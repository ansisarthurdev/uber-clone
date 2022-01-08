import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements';

//navigation
import { useNavigation } from '@react-navigation/core';

//redux
import { useSelector } from 'react-redux';
import { selectOrigin } from '../app/slices/navSlice';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png',
        screen: 'EatsScreen', //update in future
    }
]

const NavOptions = () => {

    const navigation = useNavigation();

    const origin = useSelector(selectOrigin);
    
    //button opacity depending on origin state
    const [opacity, setOpacity] = useState(.5);

    useEffect(() => {
        //change button opacity depending on origin state
        origin ? setOpacity(1) : setOpacity(.5)
    }, [origin])

    return (
        <FlatList
            data={data}
            horizontal
            style={{marginLeft: 25, marginTop: 20, marginBottom: 10}}
            renderItem={ ({item}) => (
                <View style={{ opacity: opacity }}>
                <TouchableOpacity style={{backgroundColor: '#d7d7d7', paddingTop: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 20, marginRight: 10}}
                    onPress={() => {if(origin){navigation.navigate(item.screen)}}}

                >
                    <Image style={{resizeMode: 'contain'}} source={{uri: item.image}}/>
                    <Text>{item.title}</Text>
                    <Icon 
                        name='arrowright'
                        type='antdesign'
                        color='white'
                        backgroundColor='black'
                        width='10px'
                        style={{ marginTop: 15, borderRadius: 50, width: 30, height: 30, padding: 2}}
                    />
                </TouchableOpacity>
                </View>
            )}
        />
    )
}

export default NavOptions

const Image = styled.Image`
    height: 90px;
    width: 90px;
`

const Text = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 700;
  margin-top: 10px;
`;