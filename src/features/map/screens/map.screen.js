import React, {useContext, useState, useEffect, Fragment} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import styled from 'styled-components';
import {Search} from '../components/search.components';
import {LocationContext} from '../../../components/services/location/location.context';
import {RestaurantContext} from '../../../components/services/restaurants/restaurants.context';
import {MapCallout} from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const {lat, lng, viewport} = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <Fragment>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </Fragment>
  );
};