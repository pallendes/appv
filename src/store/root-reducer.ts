import {combineReducers} from 'redux';
import {reducer as loginReducer} from '@screens/login/reducer';
import {reducer as app} from '@app-context/reducer';

export type RootState = ReturnType<typeof root>;

const root = combineReducers({loginReducer, app});

export default root;
