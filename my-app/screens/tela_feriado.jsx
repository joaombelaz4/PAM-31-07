import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import CardFeriado from '../components/CardFeriado';
import * as feriado from '../services/feriado.js';

export default function Tela_feriado() {
  
  const [feriados, setFeriados] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarFeriados = (ano) => {
    if (!ano || ano.length !== 4) {
      setFeriados([]);
      return;
    }
    setLoading(true);
    setError(null);
    feriado.getDDD(ano)
      .then((res) => {
        setLoading(false);
        if (Array.isArray(res)) {
          setFeriados(res);
        } else {
          setFeriados([]);
        }
      })
      .catch((err) => { setFeriados([]); setLoading(false); setError(err.message || 'Erro'); });
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
      {loading && <Text>Carregando...</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
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