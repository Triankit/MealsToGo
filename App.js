import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
};

export default App;
