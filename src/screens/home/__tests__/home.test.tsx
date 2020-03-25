import 'react-native';
import React from 'react';
import {Home} from '../';

import {render, fireEvent} from 'react-native-testing-library';

describe('<Home />', () => {
  const mockNavigation: any = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    const {getByText} = render(<Home navigation={mockNavigation} />);

    expect(getByText('¿Qué ingredientes quieres consultar?')).toBeTruthy();
  });

  it('should call the `navigat` function on camera button press', () => {
    const {getByA11yLabel} = render(<Home navigation={mockNavigation} />);

    fireEvent.press(getByA11yLabel('Abrir camara'));

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
  });
});
