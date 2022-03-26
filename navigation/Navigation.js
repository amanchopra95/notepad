import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notepad from '../components/Notepad';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

// const NotepadNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             title: 'Home'
//         }
//     },
//     Text: {
//         screen: Notepad,
//         navigationOptions: ({navigation}) => {
//             return {
//                 title: navigation.getParam("title", "Fallback Text")
//             }
//         }
//     }
// });

const NotepadNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }} />
                <Stack.Screen
                    name="Notepad"
                    component={Notepad}
                    options={{ title: 'Notepad' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default createAppContainer(NotepadNavigator);
