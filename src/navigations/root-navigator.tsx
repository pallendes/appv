import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store/root-reducer';
import {Login} from '@screens/login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigator} from './drawer-navigator';

type RootStackParamList = {
  App: undefined;
  Login: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const {isUserLogged} = useSelector((state: RootState) => state.app);

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        {isUserLogged ? (
          <RootStack.Screen name="App" component={DrawerNavigator} />
        ) : (
          <RootStack.Screen name="Login" component={Login} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
