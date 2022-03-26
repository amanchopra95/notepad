import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from "react-native";

import data from '../data/data'

export default function Notepad(props) {
  const [text, setText] = useState(props.navigation.getParam('text', ''))
  const [id, setId] = useState(null)
  const textInput = useRef();

  const handleBack = () => {
    // Save data before back.
    console.log(textInput.current.value)
  }

  useEffect(() => {
    props.navigation.setParams({ title: props.navigation.getParam('title', '') })
    if (props.navigation.getParam('id')) {
      setId(props.navigation.getParam('id'))
      data.map((notepad) => {
        if (notepad.id === id) {
          setText(notepad.text)
        }
      })
    }
  }, [])

  const handleHardwareBackButton = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      handleBack()
      props.navigation.goBack()
      return true;
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
    }
  }

  useEffect(handleHardwareBackButton)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TextInput
          autoFocus={true}
          ref={textInput}
          multiline={true}
          spellCheck={true}
          style={styles.textInput}
          onChangeText={newText => setText(newText)}
          defaultValue={text}></TextInput>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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