import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from "react-native";

// class Notepad extends React.Component {
//   state = {

//   }

//   componentDidMount () {
//     console.log(this.props)
//   }

//   static navigationOptions = {
//     title: "Title of the note"
//   }

//   textInput = React.createRef()

//   handleBack() {
//     console.log(this.textInput.current.value)
//   }

//   handleHardwareBackButton() {
//     BackHandler.addEventListener('hardwareBackPress', () => {
//       this.handleBack()
//       this.props.navigation.goBack()
//       return true
//     })
//   }

//   componentWillUnmount () {
//     BackHandler.removeEventListener('hardwareBackPress')
//   }

//   render () {
//     return (
//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         <SafeAreaView style={styles.container}>
//           <TextInput 
//             autoFocus={true}
//             ref={textInput} 
//             multiline={true}
//             spellCheck={true}
//             style={styles.textInput}
//             value={this.props.value}></TextInput>
//         </SafeAreaView>
//       </TouchableWithoutFeedback>
//     )
//   }

// }

export default function Notepad (props) {

  const textInput = useRef();

  const handleBack = () => {
    // Save data before back.
    console.log(textInput.current.value)
  }

  useEffect(() => {
    console.log(props.navigation)
    props.navigation.setParams({ title: props.navigation.getParam('title', 'New Text Page') })
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
          value={props.value}></TextInput>
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