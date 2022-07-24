import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Spacer} from '../spacer/spacer';
import {CompactRestaurantInfo} from '../restaurant/compact-restaurant-info.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({favourites, onNavigate}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, index) => {
          return (
            <Spacer key={restaurant.name + index} pos="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantsDetail', {
                    restaurant,
                  })
                }>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
