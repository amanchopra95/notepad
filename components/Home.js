import React from 'react';
import { View, StyleSheet } from 'react-native';

import List from './List';
import FAB from './FAB';

export default function Home(props) {
  return (
    <View style={styles.main}>
      <React.Fragment>
        <List data={props.data} onPress={props.setScreen} />
        <FAB onPress={props.setScreen} />
      </React.Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 10,
    flex: 1
  }
})
