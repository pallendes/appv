import {combineReducers} from 'redux';
import {reducer as loginReducer} from '@screens/login/reducer';

export type RootState = ReturnType<typeof root>;

const root = combineReducers({loginReducer});

export default root;
