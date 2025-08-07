import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CardCep from '../components/CardCep';

import Tela_ddd from './screens/Tela_ddd';
import Tela_cep from './screens/Tela_cep';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
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
        <Tab.Screen name="DDD" component={Tela_ddd} />
        <Tab.Screen name="CEP" component={Tela_cep} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

{erro ? (
  <Text style={styles.erro}>{erro}</Text>
) : resultado && (
  <CardCep
    cep={resultado.cep}
    city={resultado.city}
    state={resultado.state}
    neighborhood={resultado.neighborhood}
    street={resultado.street}
  />
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
