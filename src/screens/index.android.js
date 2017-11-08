import { Navigation } from 'react-native-navigation';

import StartUpScreen from './StartUpScreen';
import LogInScreen from './LogInScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {

  Navigation.registerComponent('CodeWithRohit.StartUpScreen', () => StartUpScreen);
  Navigation.registerComponent('CodeWithRohit.LogInScreen', () => LogInScreen );  

}