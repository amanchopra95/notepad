import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/colors'

const NotepadItem = (props) => {
  const Component = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

    return (
      <Component onPress={props.onPress}>
        <View style={styles.listItem}>
          <Text style={styles.whiteColor}>{props.title}</Text>
        </View>
      </Component>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: Colors.secondary,
        marginVertical: 2,
        borderBottomColor: '#eee',
        padding: 10
    },
    whiteColor: {
        color: '#fff'
    }
})

export default NotepadItem