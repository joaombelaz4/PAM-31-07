import { StyleSheet, View, Text } from 'react-native';

const CardCidade = ({ nome, uf }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Cidade: {nome}</Text>
      <Text style={styles.texto}>UF: {uf}</Text>
    </View>
  );
}

export default CardCidade;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});