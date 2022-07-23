import React from 'react';
import {View, Platform, Image} from 'react-native';
import styled from 'styled-components';
import {Text} from '../typography/text.components';

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

// const CompactWebview = styled(WebView)`
//   border-radius: 10px;
//   width: 120px;
//   height: 100px;
// `;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({restaurant}) => {
  return (
    <Item>
      <CompactImage source={{uri: restaurant.photos[0]}} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
