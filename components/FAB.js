import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function FAB({ onPress, icon }) {

  const PlatformDependentComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  return (
    <PlatformDependentComponent onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.icon}>+</Text>
      </View>
    </PlatformDependentComponent>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    // backgroundColor: "#ee6e73",
    backgroundColor: "#f7287b",
    width: 45,
    height: 45,
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
    fontSize: 30,
    fontWeight: "bold"
  }
})