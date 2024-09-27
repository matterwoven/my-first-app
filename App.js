import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Input } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { TextInput } from 'react-native-web';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [inputText, setInputText] = useState("");
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDark ? "#333" : "#FFF",
  };
  const textStyle = {
    ...styles.text,
    color: isDark ? "#FFF" : "#333"
  }
  const logInputStyle = {
    ...styles.logInput,
    borderColor: isDark ? "#FFF" : "#333",
    color: isDark ? "#FFF" : "#333",
  };
  const logTextStyle = {
    ...styles.logtext,
    color: isDark ? "#FFF" : "#333",
  };
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{isDark ? "Dark Mode" : "Light Mode"}</Text>
      <Button 
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onPress={() => setIsDark(!isDark)}
        />
      <View styles={styles.logContainer}>
        <Text style={logTextStyle}>Type to log to the console</Text>
        <TextInput
          style={logInputStyle}
          onChangeText={(text) => setInputText(text)}
          />
          <Button title="Log to Console" onPress={() => console.log(inputText)} />
          <Button
            title="Warn to Console"
            onPress={() => console.warn(inputText)}
          />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 20,
  },
});
