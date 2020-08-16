import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header () {
    return (
        <View style={[styles.container, styles.boxShadow]}> 
            <Text style={styles.fontStyle}>Simple Notepad</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: '#fff',
        padding: 15
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },
    fontStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
})