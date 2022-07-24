import React, {useContext, useState} from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components';
import {Spacer} from '../../components/spacer/spacer';
import {RestaurantInfoCard} from '../restaurants/component/restaurants-info-card.components';
import {RestaurantContext} from '../../components/services/restaurants/restaurants.context';
import {Search} from '../restaurants/component/search.components';
import {FavouritesContext} from '../../components/services/favourites/favourites.contex';
import {FavouritesBar} from '../../components/favourites/favourites-bar.component';

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

export const RestaurantsScreen = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToogled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantsDetail', {
                  restaurant: item,
                })
              }>
              <Spacer pos="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </SafeArea>
  );
};
