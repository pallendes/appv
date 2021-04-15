import {createReducer} from 'deox';
import {
  setLoadingState,
  setUserInformation,
  clearUserInformation,
  userLogout,
} from './actions';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface AppReducer {
  isUserLogged: boolean;
  isLoading: boolean;
  userInformation: FirebaseAuthTypes.User | null;
}

const initialState: AppReducer = {
  isUserLogged: false,
  isLoading: true,
  userInformation: null,
};

export const reducer = createReducer(initialState, handleAction => [
  handleAction(setLoadingState, (state, {payload}) => {
    return {
      ...state,
      isLoading: payload,
    };
  }),
  handleAction(setUserInformation, (state, {payload}) => ({
    ...state,
    userInformation: payload,
    isUserLogged: payload !== null,
  })),
  handleAction(clearUserInformation, state => ({
    ...state,
    userInformation: null,
    isUserLogged: false,
  })),
  handleAction(userLogout, state => ({
    ...state,
    isUserLogged: false,
  })),
]);
