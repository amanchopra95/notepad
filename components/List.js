import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation'

import NotepadItem from './NotepadItem';

const List = (props) => {

    const setScreen = (id, title, text) => {
        props.navigation.navigate('Text', { title: title, id: id, text: text })
    }

    const renderNotepadItem = (itemData) => {
        return (
            <NotepadItem
                onPress={() => setScreen(itemData.item.id, itemData.item.title, itemData.item.text)} title={itemData.item.title}
                data={itemData.item} />
        )
    }

    return (
        <FlatList
            data={props.data}
            renderItem={renderNotepadItem}
            keyExtractor={item => item.title}
        />
    );
}

const styles = StyleSheet.create({

})

export default withNavigation(List)