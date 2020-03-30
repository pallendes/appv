import React from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Text} from 'react-native-elements';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
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
          <DrawerItem label="Help" onPress={() => null} />
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
  avatar: {
    margin: 12,
    alignSelf: 'center',
  },
});
