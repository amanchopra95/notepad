import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Home from '../components/Home';
import Colors from '../constants/colors'
import Lists from '../data/data'

const HomeScreen = (props) => {
  const [data, setData] = useState(Lists);

  const setScreen = () => {
    props.navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Home
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