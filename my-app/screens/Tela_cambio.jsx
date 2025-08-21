import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ActivityIndicator, ScrollView } from 'react-native';
import CardCambio from '../components/Cardcambio';
import * as cambioService from '../services/cambio.js';

export default function Tela_cambio() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('BRL');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarCambio = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const query = `${from}_${to}_${amount}`; // formato esperado: por exemplo 'USD_BRL_1'
    try {
      const res = await cambioService.getDDD(query);
      // espera-se que a API retorne { rate, converted } ou similar
      const rate = res?.rate ?? res?.cotacao ?? null;
      const converted = res?.converted ?? res?.valor_convertido ?? null;
      setResult({ from, to, rate, amount, converted });
    } catch (err) {
      setError('Erro ao buscar câmbio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de Câmbio</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} value={from} onChangeText={setFrom} placeholder="De (ex: USD)" />
        <TextInput style={styles.input} value={to} onChangeText={setTo} placeholder="Para (ex: BRL)" />
      </View>
      <TextInput style={styles.inputFull} value={amount} onChangeText={setAmount} placeholder="Valor" keyboardType="numeric" />

      <Button title="Buscar" onPress={buscarCambio} />

      {loading && <ActivityIndicator style={{ marginTop: 12 }} />}
      {error && <Text style={styles.error}>{error}</Text>}

      {result && (
        <CardCambio
          from={result.from}
          to={result.to}
          rate={result.rate}
          amount={result.amount}
          converted={result.converted}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    minHeight: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 10,
    marginRight: 8,
  },
  inputFull: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 8,
  }
});
