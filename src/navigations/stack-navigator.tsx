import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {Home} from '@screens/home';
import {Capture} from '@screens/capture';
import {CheckIngredients} from '@screens/check-ingredients';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from './drawer-navigator/drawer-navigator';

export type StackNavigatorParamList = {
  Login: undefined;
  Home: undefined;
  Capture: undefined;
  CheckIngredients: {captureUri: string; recognizedText: string[]};
};

const Stack = createStackNavigator<StackNavigatorParamList>();

interface StackNavigatorProps {
  navigation: DrawerNavigationProp<DrawerStackParamList>;
}

export const StackNavigator = (props: StackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerLeft: () => (
            <Icon
              name="navicon"
              type="evilicon"
              size={42}
              onPress={() => props.navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Avatar rounded title="PA" containerStyle={styles.avatar} />
          ),
        }}
      />
      <Stack.Screen
        name="Capture"
        component={Capture}
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<StackNavigatorParamList, 'Capture'>;
        }) => ({
          title: 'Scanning',
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="evilicon"
              size={42}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CheckIngredients"
        component={CheckIngredients}
        options={{title: 'Ingredientes no APV'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 12,
  },
});
