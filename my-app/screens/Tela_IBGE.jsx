import { StyleSheet, View, Text, ScrollView, Button, TextInput } from 'react-native';
import { useState } from 'react';
import CardMunicipio from '../components/CardMunicipio';
import * as ibge from '../services/ibge.js';

export default function Tela_IBGE() {
  const [siglaUF, setSiglaUF] = useState('');
  const [municipios, setMunicipios] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarMunicipios = () => {
    if (!siglaUF) {
      setError('Digite a sigla da UF');
      return;
    }
    setLoading(true);
    setError(null);
    setMunicipios([]);
    ibge.getMunicipios(siglaUF.toUpperCase())
      .then((res) => {
        setMunicipios(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Erro');
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a sigla da UF (ex: SC, SP, RJ):</Text>
      <TextInput
        style={styles.input}
        value={siglaUF}
        onChangeText={setSiglaUF}
        autoCapitalize="characters"
        maxLength={2}
        placeholder="UF"
      />
      <Button title="Buscar Municípios" onPress={buscarMunicipios} />
      {loading && <Text>Carregando...</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <ScrollView style={{ width: '100%' }}>
        {municipios.map((m) => (
          <CardMunicipio key={m.codigo_ibge} nome={m.nome} codigo_ibge={m.codigo_ibge} />
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
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
});