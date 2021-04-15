import {setLoginInformation} from '../actions';

describe('login/actions', () => {
  it('should set the login information', () => {
    const user = {
      displayName: 'display name',
      email: 'email@email.com',
      emailVerified: true,
      isAnonymous: false,
      metadata: {},
      phoneNumber: null,
      photoURL: null,
    };

    const action = setLoginInformation(true, user);

    expect(action).toMatchInlineSnapshot(`
      Object {
        "payload": Object {
          "isLogged": true,
          "user": Object {
            "displayName": "display name",
            "email": "email@email.com",
            "emailVerified": true,
            "isAnonymous": false,
            "metadata": Object {},
            "phoneNumber": null,
            "photoURL": null,
          },
        },
        "type": "SET_LOGIN_INFORMATION",
      }
    `);
  });
});
