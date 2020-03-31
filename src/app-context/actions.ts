import {createActionCreator} from 'deox';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const setLoadingState = createActionCreator(
  'SET_LOADING_STATE',
  resolve => (isLoading: boolean) => resolve(isLoading),
);

export const setUserInformation = createActionCreator(
  'SET_USER_INFORMATION',
  resolve => (user: FirebaseAuthTypes.User | null) => resolve(user),
);

export const userLogout = createActionCreator('USER_LOGOUT', resolve => () =>
  resolve(),
);

export const clearUserInformation = createActionCreator(
  'CLEAR_USER_INFORMATION',
  resolve => () => resolve(),
);
