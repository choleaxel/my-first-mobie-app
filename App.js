import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fisher Price 'My First Mobile App'!</Text>
      <Button title="Press me" />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 26,
    color: '#405566'
  },
  container: {
    flex: 1,
    backgroundColor: '#97d7d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
