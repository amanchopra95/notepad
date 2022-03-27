import React, { useRef } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet
} from "react-native";

export function Notepad(props) {
  const textInput = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoFocus={true}
        ref={textInput}
        multiline={true}
        spellCheck={true}
        style={styles.textInput}
        onChangeText={newText => props.setText(newText)}
        defaultValue={props.text}></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    flex: 1,
    borderBottomColor: "#000"
  },
  textInput: {
    padding: 15
  }
});