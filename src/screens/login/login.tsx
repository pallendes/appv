import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {StackNavigatorParamList} from '@navigations/stack-navigator';
import {useSelector, useDispatch} from 'react-redux';
import {setUserInformation} from '@app-context/actions';
import {RootState} from '@store/root-reducer';

type LoginScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamList,
  'Login'
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export const Login = ({navigation}: LoginProps) => {
  const dispatch = useDispatch();
  const {userInformation} = useSelector((state: RootState) => state.app);

  const enterAsGuest = async () => {
    try {
      if (userInformation) {
        dispatch(setUserInformation(userInformation));
      } else {
        await auth().signInAnonymously();
      }
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          throw new Error('Enable anonymous in your firebase console.');
        default:
          throw new Error(e);
      }
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.form}>
          <Text h1 h1Style={styles.title}>
            AppV
          </Text>
          <Input placeholder="Usuario" containerStyle={styles.formElement} />
          <Input placeholder="Contraseña" containerStyle={styles.formElement} />
          <Button
            title="Ingresar"
            containerStyle={styles.loginButton}
            onPress={handleLoginPress}
          />
          <TouchableOpacity style={styles.guestText} onPress={enterAsGuest}>
            <Text>Ingresar como invitado</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  formElement: {
    marginBottom: 22,
  },
  loginButton: {
    paddingTop: 12,
    width: '100%',
  },
  guestText: {
    alignSelf: 'flex-end',
    marginTop: 22,
  },
});
