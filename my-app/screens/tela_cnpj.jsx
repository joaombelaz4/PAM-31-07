import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';
import CardCNPJ from '../components/CardCNPJ';
import { getDDD as getCnpj } from '../services/cnpj.js';

export default function Tela_cnpj() {
  const [empresa, setEmpresa] = useState(null);

  const buscarCNPJ = (codigo) => {
    if (!codigo) {
      setEmpresa(null);
      return;
    }
    getCnpj(codigo)
      .then((res) => {
        if (res && (res.nome || res.name || res.razao_social)) {
          setEmpresa({ nome: res.nome || res.name || res.razao_social, fantasia: res.fantasia || res.fantasy || res.nome_fantasia, uf: res.uf || res.estado });
        } else {
          setEmpresa(null);
        }
      })
      .catch(() => setEmpresa(null));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CNPJ"
        onChangeText={buscarCNPJ}
      />
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