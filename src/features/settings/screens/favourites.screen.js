import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {FavouritesContext} from '../../../services/favourites/favourites.contex';

import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text} from '../../../components/typography/text.components';
import {Spacer} from '../../../components/spacer/spacer';

import {RestaurantList} from '../../restaurants/component/restaurant-list.styles';
import {RestaurantInfoCard} from '../../restaurants/component/restaurants-info-card.components';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }>
              <Spacer pos="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
