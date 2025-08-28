import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Tela_ddd from './screens/Tela_ddd';
import Tela_cep from './screens/Tela_cep';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela_fipe from './screens/tela_fipe';
import Tela_feriado from './screens/tela_feriado';
import Tela_isbn from './screens/tela_isbn';
import Tela_cnpj from './screens/tela_cnpj';
import Tela_cambio from './screens/Tela_cambio';
import Tela_IBGE from './screens/Tela_IBGE';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'DDD') {
              iconName = focused ? 'call' : 'call-outline';
            } else if (route.name === 'CEP') {
              iconName = focused ? 'location' : 'location-outline';
            }
            return <Ionicons name={iconName} size={size} color={focused ? '#007AFF' : '#8e8e93'} />;
          },
        })}
      >
        <Drawer.Screen name="DDD" component={Tela_ddd} />
        <Drawer.Screen name="CEP" component={Tela_cep} />
        <Drawer.Screen name="FIPE" component={Tela_fipe} />
        <Drawer.Screen name="FERIADO" component={Tela_feriado} />
        <Drawer.Screen name="ISBN" component={Tela_isbn} />
        <Drawer.Screen name="CNPJ" component={Tela_cnpj} />
        <Drawer.Screen name="CAMBIO" component={Tela_cambio} />
        <Drawer.Screen name="IBGE" component={Tela_IBGE} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

