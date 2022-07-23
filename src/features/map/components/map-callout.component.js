import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {CompactRestaurantInfo} from '../../../components/restaurant/compact-restaurant-info.component';

const MyText = styled(Text)``;

export const MapCallout = ({restaurant}) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
