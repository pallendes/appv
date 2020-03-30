import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './stack-navigator';
import {CustomDrawer} from './custom-drawer';
import {Icon} from 'react-native-elements';
import {Colors} from '@styles/colors';

export type RootStackParamList = {
  Home: undefined;
};

const {Navigator, Screen} = createDrawerNavigator<RootStackParamList>();

export const DrawerNavigator = () => {
  return (
    <Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerIcon: () => <Icon name="home" color={Colors.primary} />,
        }}
      />
    </Navigator>
  );
};
