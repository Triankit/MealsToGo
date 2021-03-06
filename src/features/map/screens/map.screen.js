import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import {Search} from '../components/search.components';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
