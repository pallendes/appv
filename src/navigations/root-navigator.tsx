import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Icon, Avatar} from 'react-native-elements';

import {Home} from '@screens/home';
import {Capture} from '@screens/capture';

export type RootStackParamList = {
  Home: undefined;
  Capture: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
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
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 12,
  },
});
