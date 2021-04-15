import React from 'react';
import {render} from 'react-native-testing-library';
import * as ReactRedux from 'react-redux';
import {Login} from '../';

jest.mock('@react-native-firebase/auth', () => {
  return {
    __esModule: true,
    default: () => ({
      onAuthStateChanged: jest.fn(),
      signInAnonymously: jest.fn(),
    }),
  };
});

describe('<Login />', () => {
  const mockNavigation: any = {
    navigate: jest.fn(),
  };

  jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
  const useSelectorSpy = jest.spyOn(ReactRedux, 'useSelector');

  it.todo('it should render nothing while it is initializaing');

  it('it should render nothing when the user is not set', () => {
    useSelectorSpy.mockReturnValue({user: {}});

    const {toJSON} = render(<Login navigation={mockNavigation} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it.todo('it should sign the user as a guest');
});
