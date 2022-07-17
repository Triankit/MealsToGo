import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantsScreen} from './src/features/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
