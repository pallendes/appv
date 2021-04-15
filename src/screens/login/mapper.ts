import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {User} from './reducer';

export const map = (user: FirebaseAuthTypes.User | null): User | null => {
  if (!user) {
    return null;
  }

  return {
    displayName: user.displayName,
    email: user.displayName,
    isAnonymous: user.isAnonymous,
    metadata: {
      lastSignInTime: user.metadata.lastSignInTime,
    },
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
  };
};
