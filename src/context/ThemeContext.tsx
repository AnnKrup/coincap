import React, {Dispatch, FC, SetStateAction, useContext, useState} from 'react';

export type CustomTheme = {
  colors: {
    text: string;
    mainBg: string;
    itemBg: string;
  };
};

export type ThemeContext = {
  theme: CustomTheme;
  setTheme: Dispatch<SetStateAction<any>>;
};

type Props = {
  children: React.ReactNode;
};

export const LIGHT_THEME = {
  colors: {
    text: 'black',
    mainBg: 'white',
    itemBg: 'grey',
  },
};

export const DARK_THEME = {
  colors: {
    text: 'white',
    mainBg: 'grey',
    itemBg: 'white',
  },
};

export const ThemeContext = React.createContext<ThemeContext>({
  theme: LIGHT_THEME,
  setTheme: () => {},
});

export const ThemeProvider: FC<Props> = props => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const themeData = {theme, setTheme};

  return (
    <ThemeContext.Provider value={themeData}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
