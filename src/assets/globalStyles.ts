import {Dimensions} from 'react-native';

export const colors = {
  primary: '#EC8B57',
  black: '#191919',
  red: '#FF3636',
  lightBlue: '#36D2FF',
  green: '#8FEF73',
  grey: '#767676',
  borderGrey: '#C9C9C9',
  statusGrey: '#666666',
  textGrey: '#A2A2A2',
  darkBlue: '#83abeb',
};

export const fonts = {
  noto_sans_kr: {
    thin: 'NotoSansKR-Thin',
    light: 'NotoSansKR-Light',
    medium: 'NotoSansKR-Medium',
    regular: 'NotoSansKR-Regular',
    bold: 'NotoSansKR-Bold',
    black: 'NotoSansKR-Black',
  },
  roboto: {
    thin: 'Roboto-Thin',
    light: 'Roboto-Light',
    medium: 'Roboto-Medium',
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};

// Design file size
export const basicDimensions = {
  height: 900,
  width: 360,
};

export const hp = (value: number) =>
  Math.floor(
    Dimensions.get('screen').height * (1 / basicDimensions.height) * value,
  );

export const wp = (value: number) =>
  Math.floor(
    Dimensions.get('screen').width * (1 / basicDimensions.width) * value,
  );
