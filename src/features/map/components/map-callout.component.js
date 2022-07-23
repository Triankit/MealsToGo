import React from 'react';
import {View, Text, Platform} from 'react-native';
import styled from 'styled-components';
import {CompactRestaurantInfo} from '../../../components/restaurant/compact-restaurant-info.component';

const isAndroid = Platform.OS === 'android';

export const MapCallout = ({restaurant}) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
