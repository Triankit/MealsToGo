import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {RestaurantContextProvider} from './src/components/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/components/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
};

export default App;
