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
  Text: {
    style: {
      fontWeight: '400',
      fontFamily: 'Oswald-Regular',
    },
    h1Style: {
      fontWeight: 'bold',
    },
    h2Style: {
      fontWeight: 'bold',
    },
    h3Style: {
      fontWeight: 'bold',
    },
    h4Style: {
      fontWeight: 'bold',
    },
  },
};

export default theme;
