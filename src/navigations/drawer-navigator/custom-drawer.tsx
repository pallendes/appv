import React from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {Avatar, Text, Icon} from 'react-native-elements';
import {Colors} from '@styles/colors';
import {userLogout} from '@app-context/actions';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container}>
        <View style={styles.profileInformation}>
          <Avatar
            rounded
            title="PA"
            containerStyle={styles.avatar}
            size="large"
          />
          <View style={styles.profileInformationText}>
            <Text>Hola!, Pablo</Text>
            <Text>allendes91@gmail.com</Text>
          </View>
        </View>
        <View style={styles.routes}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Quiero registrarme!"
            onPress={() => dispatch(userLogout())}
            icon={() => <Icon name="person-add" color={Colors.primary} />}
          />
        </View>
        <View style={styles.bottomOptions}>
          <DrawerItem
            label="Help"
            onPress={() => null}
            icon={() => <Icon name="help" color={Colors.primary} />}
          />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Dimensions.get('screen').height,
  },
  profileInformation: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  profileInformationText: {
    alignItems: 'center',
  },
  routes: {
    flex: 5,
  },
  bottomOptions: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: 12,
    alignSelf: 'center',
  },
});
