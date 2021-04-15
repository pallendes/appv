/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import AppEntry from './src/main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppEntry);
