import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Layout from '../container/Layout';
import Colors from '../constants/colors'
import Lists from '../data/data'

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Notepad"
//   } 

//   state ={
//     data: [...Lists]
//   }

//   setScreen () {
//     this.props.navigation.navigate('Text')
//   }

//   textScreen (title, content) {
//     this.props.navigation.setParams({ title, content })
//     this.props.navigation.navigate('Text')
//   }

//   componentDidMount() {
//     console.log(this.props.navigation)
//   }

//   render () {
//     return (
//       <View style={styles.container}>
//         <Layout 
//           setScreen={this.setScreen}
//           textScreen={this.textScreen}
//           data={this.state.data} />
//       </View>
//     )
//   }
// }

const HomeScreen = (props) => {
  const [data, setData] = useState(Lists);

  const setScreen = () => {
    props.navigation.navigate('Text')
  }

  return (
    <View style={styles.container}>
      <Layout 
        setScreen={setScreen}
        data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginTop: -2
  },
});

export default HomeScreen;