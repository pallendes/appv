import React, {useEffect} from 'react';
import {Splash} from '@screens/splash';
import {RootNavigator} from '@navigations/root-navigator';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/root-reducer';
import {setUserInformation, setLoadingState} from './actions';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const App = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (userState: FirebaseAuthTypes.User | null) => {
        dispatch(setUserInformation(userState));

        setTimeout(() => {
          dispatch(setLoadingState(false));
        }, 1000);
      },
    );

    return subscriber;
  }, [dispatch]);

  if (isLoading) {
    return <Splash />;
  }

  return <RootNavigator />;
};
