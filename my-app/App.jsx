import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { InputDDD }  from './components/Inputs';
import CardCidade from './components/CardCidade';

import * as ddd from './services/ddd.js';
export default function App() {


  const exibirCidadesDoDDD = (digito) => {
    if (!digito || digito.length !== 2) {
      return;
    }
    ddd.getDDD(digito)
    .then((resposta) => {
      console.log(resposta);
    })
    .catch((error) => {
      console.error('Error fetching DDD:', error);
    });
  }



  return (
    <View style={styles.container}>
      <InputDDD 
        onChangeText={
          (ddd)=>exibirCidadesDoDDD(ddd.trim())
        } 
      />
      <CardCidade
        nome="São Paulo"
        uf="SP"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
