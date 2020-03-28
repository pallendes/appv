import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Icon, Avatar, ThemeProvider} from 'react-native-elements';
import lightTheme from '@styles/theme/light';

import {Home} from '@screens/home';
import {Capture} from '@screens/capture';
import {CheckIngredients} from '@screens/check-ingredients';
import {Login} from '../screens/login';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Capture: undefined;
  CheckIngredients: {captureUri: string; recognizedText: string[]};
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>
        <Navigator initialRouteName="Login">
          <Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerLeft: () => (
                <Icon name="navicon" type="evilicon" size={42} />
              ),
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
      </ThemeProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 12,
  },
});
