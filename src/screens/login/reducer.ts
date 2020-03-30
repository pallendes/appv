import {createReducer} from 'deox';
import {setLoginInformation} from './actions';

export interface User {
  displayName: string | null;
  email: string | null;
  isAnonymous: boolean;
  metadata: {
    lastSignInTime?: string;
  };
  phoneNumber: string | null;
  photoURL: string | null;
}

interface LoginReducer {
  isLogged: boolean;
  user: User | null;
}

const initialState: LoginReducer = {
  isLogged: false,
  user: null,
};

export const reducer = createReducer(initialState, handleAction => [
  handleAction(setLoginInformation, (state, {payload}) => ({
    ...state,
    isLogged: payload.isLogged,
    user: payload.user,
  })),
]);
