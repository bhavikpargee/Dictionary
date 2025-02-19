import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const { key, definition } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{key}</Text>
      <Text style={styles.definition}>{definition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  definition: {
    fontSize: 16,
    textAlign: 'center',
  }
});