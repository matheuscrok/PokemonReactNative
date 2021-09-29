import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pokemon from './src/pages/Pokemon';
import Home from './src/pages/Home';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteNam="Home" >
        {/* exemplo simples: options={{ title: 'Nome Tela' }}*/}
        <Stack.Screen
          name="Home"
          component={Home}
          options={ ({navigation}) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#9999'
              },
              headerTintColor: '#FFF',
              headerShown: true,
              headerRight: () => (
                <Button title="+" onPress={() => navigation.navigate('Pokemon')}  ></Button>
              )
            
          })}
        />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}