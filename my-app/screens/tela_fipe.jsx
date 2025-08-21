import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';
import CardFipe from '../components/CardFipe';
import { getFipe } from '../services/fipe.js';

export default function Tela_fipe() {
  const [carro, setCarro] = useState(null);

  const buscarFipe = (codigo) => {
    if (!codigo) {
      setCarro(null);
      return;
    }
    getFipe(codigo)
      .then((res) => {
        if (res && (res.model || res.modelo || res.Model)) {
          // tentar mapear campos comuns
          setCarro({ modelo: res.model || res.modelo || res.Model, marca: res.brand || res.marca, valor: res.price || res.valor });
        } else {
          setCarro(null);
        }
      })
      .catch(() => setCarro(null));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o código FIPE"
        onChangeText={buscarFipe}
      />
      {carro && <CardFipe {...carro} />}
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
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});