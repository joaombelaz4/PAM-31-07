import { StyleSheet, View, Text } from 'react-native';

const CardCep = ({ cep, city, state, neighborhood, street }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>CEP: {cep}</Text>
      <Text style={styles.texto}>Cidade: {city}</Text>
      <Text style={styles.texto}>Estado: {state}</Text>
      <Text style={styles.texto}>Bairro: {neighborhood}</Text>
      <Text style={styles.texto}>Rua: {street}</Text>
    </View>
  );
};

export default CardCep;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#e7f7ff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
});