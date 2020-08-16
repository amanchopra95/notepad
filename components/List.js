import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { withNavigation } from 'react-navigation'

import NotepadItem from './NotepadItem';

const List = (props) => {

    const setScreen = (id, title) => {
        props.navigation.navigate('Text', { title: title, id: id })
    }

    return (
        <FlatList 
            data={props.data}
            renderItem={(itemData) => <NotepadItem onPress={setScreen(itemData.item.id, itemData.item.title)} title={itemData.item.title} data={itemData.item} />}
            keyExtractor={item => item.title}
        />
    );
}

const styles = StyleSheet.create({

})

export default withNavigation(List)