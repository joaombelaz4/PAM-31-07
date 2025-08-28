import { View, Text, StyleSheet } from 'react-native';

export default function CardMunicipio({ nome, codigo_ibge }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.codigo}>Código IBGE: {codigo_ibge}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  codigo: {
    color: '#555',
    fontSize: 14,
  },
});