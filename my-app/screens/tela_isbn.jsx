import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';
import CardISBN from '../components/cardISBN';
import { getIsbn } from '../services/isbn.js';

export default function Tela_isbn() {
  const [livro, setLivro] = useState(null);

  const buscarISBN = (codigo) => {
    if (!codigo) {
      setLivro(null);
      return;
    }
    getIsbn(codigo)
      .then((res) => {
        if (res && (res.title || res.titulo || res.Title)) {
          setLivro({ title: res.title || res.titulo || res.Title, author: res.author || res.autor, publisher: res.publisher || res.editora });
        } else {
          setLivro(null);
        }
      })
      .catch(() => setLivro(null));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o ISBN"
        onChangeText={buscarISBN}
      />
      {livro && <CardISBN {...livro} />}
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