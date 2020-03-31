import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import {Colors} from '@styles/colors';

import {StackNavigator} from '../stack-navigator';
import {CustomDrawer} from './custom-drawer';

type DrawerStackParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerIcon: () => <Icon name="home" color={Colors.primary} />,
        }}
      />
    </Drawer.Navigator>
  );
};
