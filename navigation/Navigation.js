import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Notepad from '../components/Notepad';
import HomeScreen from '../Screens/HomeScreen';

const NotepadNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Text: {
        screen: Notepad,
        navigationOptions: ({navigation}) => {
            return {
                title: navigation.getParam("title", "Fallback Text")
            }
        }
    }
});

export default createAppContainer(NotepadNavigator);
