import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import CardFeriado from '../components/CardFeriado';
import * as feriado from '../services/feriado.js';

export default function Tela_feriado() {
  const [feriados, setFeriados] = useState([]);

  const buscarFeriados = (ano) => {
    if (!ano || ano.length !== 4) {
      setFeriados([]);
      return;
    }
    feriado.getDDD(ano)
      .then((res) => {
        if (Array.isArray(res)) {
          setFeriados(res);
        } else {
          setFeriados([]);
        }
      })
      .catch(() => setFeriados([]));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o ano (ex: 2025)"
        keyboardType="numeric"
        maxLength={4}
        onChangeText={buscarFeriados}
      />
      <ScrollView style={{ width: '100%' }}>
        {feriados.map((f, idx) => (
          <CardFeriado key={idx} date={f.date} name={f.name} type={f.type} />
        ))}
      </ScrollView>
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