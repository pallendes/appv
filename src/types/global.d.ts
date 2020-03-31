interface User {
  isInitializing: true;
  displayName: string | null;
  email: string | null;
  isAnonymous: boolean;
  metadata: {
    lastSignInTime?: string;
  };
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
}
