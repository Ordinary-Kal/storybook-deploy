import { getColorSchema } from '@/config/theme/utils/color/get-color-schema';
import { getColorToken } from '@/config/theme/utils/color/get-color-semantic-token';

const colors = {
  primary: {
    default: {
      primary: '#2256FF',
      5: '#002089',
      4: '#0031D2',
      3: '#5379F6',
      2: '#CCD4FD',
      1: '#F8F9FF',
      0: '#E2E8F0',
    },
  },
  gray: {
    default: {
      50: '#FAFAFA',
      100: '#F4F4F4',
      200: '#EEEEEE',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#616161',
      600: '#161616',
    },
  },
  white: {
    default: '#FFFFFF',
  },
  black: {
    default: '#000000',
  },
  info: {
    default: '#205EFF',
  },
  success: {
    default: '#3BD669',
  },
  warning: {
    default: '#FA9601',
  },
  danger: {
    default: {
      primary: '#FF1600',
      lighten: '#FF5040',
      darken: '#A61203',
      disabled: '#F9EAE9',
    },
  },
  dim: {
    default: 'rgb(38 38 38 / 70%)', // 디자인시스템 #262626 70%
  },
  primaryColorScheme: {
    default_gen: '#2256FF', // colorScheme 속성에서 값을 불러오기 위해 default_gen으로 생성
  },
};

const convertToColorToken = (colors) =>
  Object.keys(colors).reduce((prev, key) => {
    const color = colors[key];
    const getLight = () => {
      if (color.default) return color.default;
      if (color.default_gen) return getColorSchema(color.default_gen);
      throw Error(`should set default color on: ${key}`);
    };
    const getDark = () => {
      if (color.dark) return color.dark;
      if (color.dark_gen) return getColorSchema(color.dark_gen);
    };
    const token = getColorToken({
      key,
      light: getLight(),
      dark: getDark(),
    });
    return { ...prev, ...token };
  }, {});

export default convertToColorToken(colors);
