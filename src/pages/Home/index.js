import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, Keyboard,StyleSheet } from 'react-native'

import api from '../services/api';

export default function Home() {

    const navigation = useNavigation();

    const [pokemon, setPokemon] = useState('');
    const [pokemonList, setPokemonList] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const responseapi = await api.get(`/${pokemon}`)
                // await AsyncStorage.setItem(responseapi.data);
                setPokemonList(responseapi.data.results)
                // console.warn(pokemonList)
                Keyboard.dismiss()
            } catch (err) {
                console.log('Erro ')
            }
        }
        load();
    }, []);

    // function handleContato() {
    //     navigation.navigate('Contato', { email: 'teste@gmail', twitter: '@teste' })
    // }

    //onPress{() => navigation.navigate('Contato')}
    return (
        <View >
            <Text>Escolha o Pokemon</Text>

            <View style={styles.container}>

                <FlatList
                    data={pokemonList}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <Pokemons data={item} />}
                />
            </View>

        </View>
    );

    
}

function Pokemons({ data }) {
    console.warn(data)
    return (
        <View style={styles.pokemons}>
            <Text>Name: {data.name}</Text>
            {/* <Text>Status: {data.status.toString()}</Text> */}
            {/* <Text>Image: {data.pathimage}</Text> */}
            {/* <Button title={"X"} onPress={() => remove(data)} ></Button> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        // flex:1,
        marginTop:15
       
    },
    pokemons:{
        backgroundColor:'#ae54de',
        height:150,
        margin:10
    }
    
    }
    )