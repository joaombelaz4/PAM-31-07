import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import CardFipe from '../components/CardFipe';
import { getFipe } from '../services/fipe.js';

export default function Tela_fipe() {
  const [carro, setCarro] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');

  const buscarFipe = (codigo) => {
    if (!codigo) {
      setCarro(null);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    fetchFipe(codigo);
  };

  const timeoutRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const fetchFipe = async (codigo) => {
    try {
  setLoading(true);
      const res = await getFipe(codigo);
      if (!mountedRef.current) return;
      if (res && (res.model || res.modelo || res.Model)) {
        setCarro({ modelo: res.model || res.modelo || res.Model, marca: res.brand || res.marca, valor: res.price || res.valor });
      } else {
        setCarro(null);
        setError('Código FIPE não encontrado');
      }
    } catch (err) {
      if (!mountedRef.current) return;
      setCarro(null);
      setError(err.message || 'Erro ao buscar FIPE');
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  const handleChange = (text) => {
    setCode(text);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!text) {
      setCarro(null);
      setError(null);
      setLoading(false);
      return;
    }
    // Debounce 600ms
    timeoutRef.current = setTimeout(() => {
      fetchFipe(text.trim());
    }, 600);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o código FIPE"
        onChangeText={handleChange}
        value={code}
      />
  {loading && <Text>Carregando...</Text>}
  {error && <Text style={{ color: 'red' }}>{error}</Text>}
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