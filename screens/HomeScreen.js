import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text>I am HomeScreen!</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;