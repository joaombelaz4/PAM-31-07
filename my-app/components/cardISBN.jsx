import { StyleSheet, View, Text } from 'react-native';

const CardISBN = ({ title, author, publisher }) => (
  <View style={styles.card}>
    <Text style={styles.texto}>Título: {title}</Text>
    <Text style={styles.texto}>Autor: {author}</Text>
    <Text style={styles.texto}>Editora: {publisher}</Text>
  </View>
);

export default CardISBN;

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