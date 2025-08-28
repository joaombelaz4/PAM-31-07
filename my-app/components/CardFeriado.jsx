import { StyleSheet, View, Text } from 'react-native';



const CardFeriado = ({ date, name, type }) => {
 function obterDiaDaSemana(dataEntrada) {
      const diasDaSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira',
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
      ];

      // Se a entrada for string, tenta converter para Date
      const data = new Date(dataEntrada);

      // Verifica se a data é válida
      if (isNaN(data.getTime())) {
        throw new Error('Data inválida');
      }

      const indexDiaSemana = data.getDay(); // 0 (domingo) a 6 (sábado)
      return [indexDiaSemana, diasDaSemana[indexDiaSemana] ];
  }
  const [indexDia, nomeDia] = obterDiaDaSemana(date);
  const corDia = (indexDia === 0 || indexDia === 6) ? 'red' : 'green';
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Data: {date}</Text>
      <Text style={styles.texto}>Nome: {name}</Text>
      <Text style={styles.texto}>Tipo: {type}</Text>
      <Text style={[styles.texto, {color:corDia}]}>Dia: {nomeDia}</Text>
    </View>
  )
}

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
  texto: { fontSize: 16, color: '#333' }
 
});