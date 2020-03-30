import React, {useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigations/root-navigator';
import {RootState} from '@store/root-reducer';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginInformation} from './actions';
import * as UserMapper from './mapper';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export const Login = ({navigation}: LoginProps) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.loginReducer);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (userState: FirebaseAuthTypes.User | null) => {
        dispatch(setLoginInformation(true, UserMapper.map(userState)));
      },
    );

    return subscriber;
  }, [dispatch]);

  const enterAsGuest = async () => {
    try {
      await auth().signInAnonymously();
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

  if (user) {
    // navigation.navigate('Home');
  }

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
