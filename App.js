import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {RestaurantContextProvider} from './src/components/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/components/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/components/services/favourites/favourites.contex';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  );
};

export default App;
