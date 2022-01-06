import React from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchInput = () => {
    return (
        <SafeAreaView>
            <TextInput 
                placeholder='Where From?'
            />
        </SafeAreaView>
    )
}

export default SearchInput

const TextInput = styled.TextInput`
padding: 5px;
margin: 0 22px 0;
text-decoration: none;
font-size: 15px;
`