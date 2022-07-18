import React, {useState, useEffect, createContext, useMemo} from 'react';

import {restaurantRequest, restaurantTransform} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransform)
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
