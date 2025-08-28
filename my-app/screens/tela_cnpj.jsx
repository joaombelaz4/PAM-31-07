import { StyleSheet, View, TextInput, Text } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import CardCNPJ from '../components/CardCNPJ';
import { getDDD as getCnpj } from '../services/cnpj.js';

export default function Tela_cnpj() {
  const [empresa, setEmpresa] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cnpj, setCnpj] = useState('');

  const timeoutRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const fetchCnpj = async (digits) => {
    try {
      setLoading(true);
      setError(null);
      const res = await getCnpj(digits);
      if (!mountedRef.current) return;
      if (res && (res.nome || res.name || res.razao_social)) {
        setEmpresa({
          nome: res.nome || res.name || res.razao_social,
          fantasia: res.fantasia || res.fantasy || res.nome_fantasia,
          uf: res.uf || res.estado,
        });
      } else {
        setEmpresa(null);
        setError('Empresa não encontrada');
      }
    } catch (err) {
      if (!mountedRef.current) return;
      setEmpresa(null);
      setError(err.message || 'Erro ao buscar CNPJ');
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  const handleChange = (text) => {
    const digits = text.replace(/\D/g, '');
    setCnpj(digits);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!digits) {
      setEmpresa(null);
      setError(null);
      setLoading(false);
      return;
    }

    if (digits.length !== 14) {
      setEmpresa(null);
      setError(null);
      setLoading(false);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      fetchCnpj(digits);
    }, 700);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CNPJ (somente números)"
        onChangeText={handleChange}
        value={cnpj}
        keyboardType="numeric"
        maxLength={14}
      />
      {loading && <Text>Carregando...</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {empresa && <CardCNPJ {...empresa} />}
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
