import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from "react-native-web/src/exports/TextInput";
import validate from "react-native-web/dist/exports/StyleSheet/validate";

export default function App() {
  const [value, onChangeText] = React.useState('Search games');

  return (
    <View style={styles.container}>
      <Text>Please enter your search query: </Text>
      <TextInput
          style={{ height: 40, borderColor: 'gray', alignItems: 'center', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
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
