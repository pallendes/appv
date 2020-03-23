import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/home';
import {Icon, Avatar} from 'react-native-elements';

const {Navigator, Screen} = createStackNavigator();

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
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 12,
  },
});
