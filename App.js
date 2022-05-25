import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import Hero from './src/components/Hero';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Hero />
      <Counter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97d7d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);


