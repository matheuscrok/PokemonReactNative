import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, StyleSheet, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Pokemon({ route }) {
    const navigation = useNavigation()
    const [favoriteSalvo, setFavoriteSalvo] = useState(false)
    const [favorites, setFavorites] = useState(null)

    //  console.warn(route.params?.pokemonList.sprites.other['official-artwork'].front_default)

    const [imag, setImag] = useState(route.params?.pokemonList.sprites.other['official-artwork'].front_default)

    async function favorite() {
        setFavoriteSalvo(estadoAnterior => !estadoAnterior)
        // console.warn(favoriteSalvo);
        setFavorites(imag);
        console.warn(favorites);
        await AsyncStorage.setItem('favorites', favorites)
        // alert('Salvo com sucesso!')
        Keyboard.dismiss()
    }

    return (
        <View>
            <Text>Detalhes do Pokémon</Text>

            <View style={styles.container}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={favoriteSalvo ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={favorite}
                    value={favoriteSalvo}
                />

                <Text>Nome: {route.params?.pokemonList.name}</Text>
                <Text>Altura: {route.params?.pokemonList.height} m</Text>
                <Text>Peso: {route.params?.pokemonList.weight} kg </Text>
                <Text>Habilidades: {route.params?.pokemonList.abilities[0].ability.name} </Text>
                <Text>Tipo: {route.params?.pokemonList.types[0].type.name} </Text>


                <Image
                    style={styles.logo}
                    source={{
                        uri: `${imag}`
                    }}
                />

            </View>

            <Button title="Back" onPress={() => navigation.goBack()}></Button>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        marginLeft: 200,

    },
    bottonfav: {
        marginLeft: 50
    }
});