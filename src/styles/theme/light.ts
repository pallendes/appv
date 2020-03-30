import {Theme} from 'react-native-elements';
import {Colors} from '../colors';

const theme: Theme = {
  colors: {
    ...Colors,
  },
  Card: {
    containerStyle: {
      borderRadius: 12,
    },
    imageWrapperStyle: {
      borderRadius: 12,
      overflow: 'hidden',
    },
  },
};

export default theme;
