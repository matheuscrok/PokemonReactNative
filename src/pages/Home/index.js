import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, Keyboard, StyleSheet, TextInput } from 'react-native'

import api from '../services/api';

export default function Home() {

    const navigation = useNavigation();

    const [pokemon, setPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState(null);

    // useEffect(() => {
    //     async function list() {
    //         try {
    //             const responseapi = await api.get(`/?limit=10&offset=0`)
    //             // await AsyncStorage.setItem(responseapi.data);
    //             setPokemonList(responseapi.data.results)
    //             // console.warn(pokemonList)
    //             Keyboard.dismiss()
    //         } catch (err) {
    //             console.log('Erro ')
    //         }
    //     }
    //     list();
    // }, []);

    async function handleContato() {
        // navigation.navigate('Pokemon', { nome: {pokemon}, imagem: '@teste' })

        try {
            const responseapi = await api.get(`${pokemon}`)
            if(responseapi!=null){

                setPokemonList(responseapi.data)
            }
            // console.warn(pokemonList)
            if(pokemonList!=null){
                
                navigation.navigate('Pokemon', {pokemonList})
                setPokemonList(null);
            }
            Keyboard.dismiss()
        } catch (err) {
            console.log('Erro ')
        }

    }

    //onPress{() => navigation.navigate('Contato')}
    return (
        <View >
            <TextInput value={pokemon} onChangeText={setPokemon} />
            <Button title="Find Pokémon" onPress={handleContato}></Button>
            <View style={styles.container}>

                <FlatList
                    data={pokemonList}
                    keyExtractor={(item) => item.id}
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
            {/* <Text>Image: {data.}</Text> */}
            {/* <Button title={"X"} onPress={() => remove(data)} ></Button> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginTop: 15

    },
    pokemons: {
        backgroundColor: '#ae54de',
        height: 150,
        margin: 10
    }

})