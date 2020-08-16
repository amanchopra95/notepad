import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../components/List';
import FAB from '../components/FAB';

export default function Layout (props) {
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