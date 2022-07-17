import React from 'react';
import {SafeAreaView, View, StyleSheet, Platform, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer';
import {RestaurantInfoCard} from '../restaurants/restaurants-info-card.components';

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
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
        keyExtractor={item => item.name}
        renderItem={() => (
          <Spacer pos="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
