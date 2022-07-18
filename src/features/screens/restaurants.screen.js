import React, {useContext} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer';
import {RestaurantInfoCard} from '../restaurants/restaurants-info-card.components';
import {RestaurantContext} from '../../components/services/restaurants/restaurants.context';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return (
            <Spacer pos="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
      />
    </SafeArea>
  );
};
