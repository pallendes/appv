import React from 'react';
import {App} from './app-context';
import {ThemeProvider} from 'react-native-elements';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import lightTheme from '@styles/theme/light';
import rootReducer from '@store/root-reducer';

const store = createStore(rootReducer);

export default () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
};
