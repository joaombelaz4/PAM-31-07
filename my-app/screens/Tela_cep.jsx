import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';

export default function Tela_cep() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = async (valor) => {
    const cepLimpo = valor.replace(/\D/g, '');
    setCep(cepLimpo);
    setErro('');
    setResultado(null);

    if (cepLimpo.length === 8) {
      Keyboard.dismiss();
      try {
        const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepLimpo}`);
        if (!res.ok) throw new Error('CEP não encontrado');
        const json = await res.json();
        setResultado(json);
      } catch (e) {
        setErro('CEP não encontrado');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
        value={cep}
        onChangeText={buscarCep}
      />
      {erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : resultado && (
        <View style={styles.result}>
          <Text>CEP: {resultado.cep}</Text>
          <Text>Cidade: {resultado.city || '-'}</Text>
          <Text>Estado: {resultado.state || '-'}</Text>
          <Text>Bairro: {resultado.neighborhood || '-'}</Text>
          <Text>Rua: {resultado.street || '-'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: '100%', marginBottom: 10, paddingHorizontal: 10 },
  result: { marginTop: 20 },
  erro: { color: 'red', marginTop: 10 }
});