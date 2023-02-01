import React from 'react';

import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import MainNavigation from './navigation/MainStack';
import {ThemeProvider} from './context/ThemeContext';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
