import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import {ThemeProvider} from './context/ThemeContext';
import MainNavigator from './navigation/MainNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
