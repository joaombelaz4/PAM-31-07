import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { InputDDD } from '../components/Inputs';
import CardCidade from '../components/CardCidade';
import * as ddd from '../services/ddd.js';


export default function Tela_ddd() {
  const [cidade, setCidade] = useState(null);

  const exibirCidadesDoDDD = (digito) => {
    if (!digito || digito.length !== 2) {
      setCidade(null);
      return;
    }
    ddd.getDDD(digito)
      .then((resposta) => {
        if (resposta && resposta.cities && resposta.cities.length > 0) {
          setCidade({ nome: resposta.cities[0], uf: resposta.state });
        } else {
          setCidade(null);
        }
      })
      .catch(() => setCidade(null));
  };

  return (
    <View style={styles.container}>
      <InputDDD 
        onChangeText={(ddd) => exibirCidadesDoDDD(ddd.trim())} 
      />
      {cidade && (
        <CardCidade
          nome={cidade.nome}
          uf={cidade.uf}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});