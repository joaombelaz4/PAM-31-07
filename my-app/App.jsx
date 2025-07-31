import { StatusBar } from 'expo-status-bar';
import { View,  StyleSheet } from 'react-native';
import Tela_ddd from './screens/Tela_ddd';

export default function App() {

  return (
    <View style={styles.container}>
      <Tela_ddd />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1   
  }
});