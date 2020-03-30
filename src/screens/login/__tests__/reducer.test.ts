import {reducer} from '../reducer';
import {setLoginInformation} from '../actions';

describe('login/reducer', () => {
  it('should handle setLoginInformation action', () => {
    const action = setLoginInformation(false, null);

    expect(reducer(undefined, action)).toMatchInlineSnapshot(`
      Object {
        "isLogged": false,
        "user": null,
      }
    `);
  });
});
