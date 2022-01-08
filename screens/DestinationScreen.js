import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

//components
import UserDefaults from '../components/UserDefaults';
import SearchInputDestination from '../components/SearchInputDestination';

//redux
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../app/slices/navSlice';

//navigation
import { useNavigation } from '@react-navigation/core';

const DestinationScreen = () => {

    const [opacity, setOpacity] = useState(.7);
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    useEffect(() => {
        if(origin && destination){
            setOpacity(1);
        } else {
            setOpacity(.7);
        }
    }, [origin, destination])

    const navigation = useNavigation();

    return (
        <Container style={{
            backgroundColor: 'white',
            flex: 1
        }}>
            <Container style={{
                borderBottomWidth: 1,
                borderColor: '#d7d7d7',
                padding: 15
            }}>
                <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                }}>
                Good Morning, Ansis
                </Text>
            </Container>

            <SearchInputDestination />

            <UserDefaults />

            <Container style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
                paddingTop: 10 
            }}>
                <Container style={{opacity: opacity}}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignContent: 'center',
                    height: 40,
                    padding: 10,
                    borderRadius: 30,
                    marginRight: 20
                }}
                onPress={() => navigation.navigate('Rides')}
                >          
                    <Icon 
                        name='car'
                        type='antdesign'
                        color='white'
                        width='10px'
                        style={{width: 35, height: 35}}
                    />
                    <Text style={{
                        color: 'white'
                    }}>Rides</Text>
                </TouchableOpacity>
                </Container>

                <Container style={{opacity: opacity}}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignContent: 'center',
                    height: 40,
                    padding: 10,
                    borderRadius: 30,
                    marginLeft: 20
                }}>
                    <Icon 
                        name='fastfood'
                        type='MaterialIcons'
                        color='white'
                        width='10px'
                        style={{ width: 35, height: 35 }}
                    />
                    <Text style={{
                        color: 'white'
                    }}>Eats</Text>
                </TouchableOpacity>
                </Container>
            </Container>
            
        </Container>
    )
}

export default DestinationScreen

const Container = styled.View``
const Text = styled.Text``