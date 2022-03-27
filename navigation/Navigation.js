import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NotepadScreen } from '../Screens/NotepadScreen';
import { HomeScreen } from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export const NotepadNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Hero"
                    component={HomeScreen}
                    options={{ title: 'Home' }} />
                <Stack.Screen
                    name="Notepad"
                    component={NotepadScreen}
                    options={({ route }) => ({ title: route.params.title !== '' ? route.params.title : 'Notepad' })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}