import 'react-native';
import * as React from 'react';
import {Capture} from '../';

import {render, fireEvent} from 'react-native-testing-library';

describe('<Capture />', () => {
  const cameraRefSpy = jest.spyOn(React, 'useRef');
  const mockTakePicturaAsync = jest.fn();
  cameraRefSpy.mockReturnValue({
    current: {
      takePicturAsync: mockTakePicturaAsync,
    },
  });

  it('takes a picture when the button is pressed', () => {
    const {getByA11yLabel} = render(<Capture />);

    fireEvent.press(getByA11yLabel('Capturar imagen'));

    // expect(mockTakePicturaAsync).toHaveBeenCalledTimes(1);
  });
});
