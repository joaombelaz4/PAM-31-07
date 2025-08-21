import { StyleSheet, View, Text } from 'react-native';

const CardFeriado = ({ date, name, type }) => (
  <View style={styles.card}>
    <Text style={styles.texto}>Data: {date}</Text>
    <Text style={styles.texto}>Nome: {name}</Text>
    <Text style={styles.texto}>Tipo: {type}</Text>
  </View>
);

export default CardFeriado;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#e6f7ff',
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