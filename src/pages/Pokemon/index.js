import { useNavigation } from '@react-navigation/native';
import  React, { useState } from 'react'
import {View, Text, Button} from 'react-native' 

export default function Pokemon({route}){
const navigation = useNavigation()

//console.warn(route)

 return(
 <View>
     <Text>Detalhes Pokemon</Text>
     <Text>{route.params?.email}</Text>
     <Text>{route.params?.twitter}</Text>

 <Button title="Back" onPress={ () => navigation.goBack() }></Button>

 </View>
 );
} 