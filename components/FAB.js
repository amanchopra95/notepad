import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function FAB ({ onPress, icon }) {

    const Component = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

    return (
      <Component onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.icon}>Add</Text>
        </View>
      </Component>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: "#ee6e73",
        // backgroundColor: "#f7287b",
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 10,
        right: 10,
        alignContent: "center",
        justifyContent: "center",
        elevation: 10
    },
    icon: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})