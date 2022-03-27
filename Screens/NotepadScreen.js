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

export const NotepadScreen = (props) => {
    const [text, setText] = useState(props.route.params?.text ?? '')
    const [id, setId] = useState(null)
    const textInput = useRef();

    const handleBack = () => {
        // Save data before back.
        console.log(textInput.current.value)
    }

    useEffect(() => {
        props.navigation.setParams({ title: props.route.params?.title ?? '' })
        if (props.route.params?.id) {
            setId(props.route.params.id)
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