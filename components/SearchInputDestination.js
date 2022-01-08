import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  TouchableOpacity, FlatList } from 'react-native';

//search function
import debounce from 'lodash.debounce';
import { MAPBOX_ACCESS_TOKEN } from '@env';
import axios from 'axios';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectDestination, setDestination } from '../app/slices/navSlice'; 

const SearchInput = () => {

    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);

    //hide search box by default
    const [searchBox, setSearchBox] = useState('none');

    //destination from redux
    const destination = useSelector(selectDestination);

    useEffect(() => {
        //fetch query to mapbox
        if(query && !destination){
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${MAPBOX_ACCESS_TOKEN}`).then(
                res => {
                    console.log(res)
                    setQueryResults(res.data.features)
                    setSearchBox('flex');
                }
            )
        } else if (!query){
            dispatch(setDestination(null));
            setSearchBox('none');
        } else {
            setSearchBox('none');
        }
    }, [query])
    
    const updateQuery = (text) => setQuery(text)

    //redux
    const dispatch = useDispatch();

    const setLocation = (item) => {
        dispatch(setDestination(item));
        setQuery(item.place_name)
        //console.log(item)
    }    
    //redux end

    return (
        <SafeAreaView>
            <TextInput 
                placeholder='Where To?'
                defaultValue={query}
                onChangeText={debounce(text => updateQuery(text), 400)}
                style={{
                    backgroundColor: '#DEDDE0',
                }}
            />

            <FlatList
                style={{marginLeft: 25, marginRight: 25, marginTop: 5, display: `${searchBox}`}} 
                data={queryResults}
                renderItem={ ({item}) => (
                    <TouchableOpacity style={{
                        borderBottomWidth: 1,
                        borderColor: '#d7d7d7',
                        paddingTop: 10, paddingBottom: 10, paddingLeft: 0, paddingRight: 10
                    }}
                    onPress={() => setLocation(item)}
                    >
                        <Text>{item.place_name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default SearchInput

const Text = styled.Text`
color: black;
font-size: 13px;
`

const TextInput = styled.TextInput`
padding: 5px;
margin: 0 22px 0;
text-decoration: none;
font-size: 16px;
`