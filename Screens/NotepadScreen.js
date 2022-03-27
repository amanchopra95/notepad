import React, { useEffect, useRef, useState } from 'react';
import {
    TouchableWithoutFeedback,
    Keyboard,
    BackHandler,
} from "react-native";

import data from '../data/data'
import { Notepad } from '../components/Notepad';

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
            <Notepad
                setText={setText}
                text={text}
            />
        </TouchableWithoutFeedback>
    );
}