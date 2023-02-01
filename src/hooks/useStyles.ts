import {CustomTheme, useTheme} from '../context/ThemeContext';

export const useStyles = (stylesFunc: (theme: CustomTheme) => any) => {
  const {theme} = useTheme();

  return stylesFunc(theme);
};
