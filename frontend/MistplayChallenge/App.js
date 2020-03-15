import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import validate from "react-native-web/dist/exports/StyleSheet/validate";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Please enter your search query: </Text>
      <TextInput
          style={{ height: 40, borderColor: 'gray', alignItems: 'center', borderWidth: 1 }}
          placeholder={'Search games'}
          placeholderTextColor="#202020"
        />
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
