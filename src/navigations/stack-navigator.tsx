import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';

import {Login} from '@screens/login';
import {Capture} from '@screens/capture';
import {Home} from '@screens/home';
import {CheckIngredients} from '@screens/check-ingredients';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Capture: undefined;
  CheckIngredients: {captureUri: string; recognizedText: string[]};
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{headerShown: false}} />
      <Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerLeft: () => <Icon name="navicon" type="evilicon" size={42} />,
          headerRight: () => (
            <Avatar rounded title="PA" containerStyle={styles.avatar} />
          ),
        }}
      />
      <Screen
        name="Capture"
        component={Capture}
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<RootStackParamList, 'Capture'>;
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
      <Screen
        name="CheckIngredients"
        component={CheckIngredients}
        options={{title: 'Ingredientes no APV'}}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 12,
  },
});
