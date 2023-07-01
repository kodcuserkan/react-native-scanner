import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Barcode from './components/Barcode';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Barcode scanner app</Text>
      <Barcode />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
