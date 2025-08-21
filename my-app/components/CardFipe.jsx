import { StyleSheet, View, Text } from 'react-native';

const CardFipe = ({ modelo, marca, valor }) => (
  <View style={styles.card}>
    <Text style={styles.texto}>Modelo: {modelo}</Text>
    <Text style={styles.texto}>Marca: {marca}</Text>
    <Text style={styles.texto}>Valor: {valor}</Text>
  </View>
);

export default CardFipe;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: { fontSize: 16, color: '#333' },
});