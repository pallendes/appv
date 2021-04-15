import {createActionCreator} from 'deox';
import {User} from './reducer';

export const setLoginInformation = createActionCreator(
  'SET_LOGIN_INFORMATION',
  resolve => (isLogged: boolean, user: User | null) =>
    resolve({isLogged, user}),
);
