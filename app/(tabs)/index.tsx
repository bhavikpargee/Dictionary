import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  
  const data = [
    { key: 'लीलू', definition: 'भीगा हुआ' },
    { key: 'हुतु', definition: 'सोया हुआ' },
    { key: 'वाहदी', definition: 'आग' },
    { key: 'घेर', definition: 'मकान' },
    { key: 'पाज़रू', definition: 'हेलीकॉप्टर' },
    { key: 'हरग', definition: 'आसमान' },
    { key: 'भाटो पाणों', definition: 'पत्थर' },
    { key: 'खाटलो', definition: 'खाट चारपाई' },
    { key: 'ब‌‌ळद', definition: 'बैल' },
    { key: 'बुकड़ी', definition: 'बकरी' },
    { key: 'गार', definition: 'मिटटी' },
    { key: 'हो‌ळ', definition: 'हल' },
    { key: 'खोड', definition: 'घांस' },
    { key: 'कुकड़ों', definition: 'मुर्गा' },
    { key: 'केरी', definition: 'आम' },
  ];

  const filteredData = data.filter(item => item.key.includes(inputText));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Details', { word: item.key, definition: item.definition })}>
            <Text style={styles.itemTitle}>{item.key}</Text>
            <Text>{item.definition}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f9f9f9'
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  itemContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#e4e4e4',
    borderRadius: 8,
    width: 300,
  },
  itemTitle: {
    fontWeight: 'bold',
  }
});

