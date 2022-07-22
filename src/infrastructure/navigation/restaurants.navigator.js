import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestaurantsScreen} from '../../features/screens/restaurants.screen';
import {RestaurantDetailScreen} from './restaurants-detail.screen';
export const RestaurantsNavigator = () => {
  const RestaurantStack = createStackNavigator();
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
