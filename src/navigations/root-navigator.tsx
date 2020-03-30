import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import lightTheme from '@styles/theme/light';
import rootReducer from '@store/root-reducer';

import {DrawerNavigator} from './drawer-navigator';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Capture: undefined;
  CheckIngredients: {captureUri: string; recognizedText: string[]};
};

const store = createStore(rootReducer);

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <DrawerNavigator />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};
