import React, {useContext} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer';
import {RestaurantInfoCard} from '../restaurants/component/restaurants-info-card.components';
import {RestaurantContext} from '../../components/services/restaurants/restaurants.context';
import {Search} from '../restaurants/component/search.components';
const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const {restaurants, isLoading} = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
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
