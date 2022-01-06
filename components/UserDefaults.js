import React from 'react'
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native';


const data = [
    {
        id: '123',
        title: 'Home',
        location: 'Riga, Latvia',
        icon: 'home'
    },
    {
        id: '456',
        title: 'Work',
        location: 'Las Vegas, Nevada',
        icon: 'map'
    }
]

const UserDefaults = () => {
    return (
        <FlatList
            data={data}
            style={{marginLeft: 25, marginTop: 20}}
            renderItem={ ({item}) => (
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                    <Icon 
                        name={item.icon}
                        type='FontAwesome'
                        color='white'
                        backgroundColor='#d7d7d7'
                        width='10px'
                        style={{ marginTop: 15, borderRadius: 50, width: 35, height: 35, padding: 5, backgroundColor: '#d7d7d7'}}
                    />
                    <Container>
                        <TextHeading>{item.title}</TextHeading>
                        <Text>{item.location}</Text>
                    </Container> 
                </TouchableOpacity>
            )}
        />
    )
}

export default UserDefaults

const Container = styled.View`
margin: 10px 0 0 10px;
`

const Image = styled.Image`
    height: 90px;
    width: 90px;
`

const TextHeading = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 700;
`;

const Text = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 600;
  color: gray;
`;