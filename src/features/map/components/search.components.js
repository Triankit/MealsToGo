import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Platform, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../components/services/location/location.context';

const isAndroid = Platform.OS === 'android';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: ${isAndroid ? 0 : '47px'}
  width: 100%;
`;

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
