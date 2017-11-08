import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';


registerScreens(); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
    screen: {
        screen : 'CodeWithRohit.StartUpScreen',
        title : 'Start Up Screen'
    }
});