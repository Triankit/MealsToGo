import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsScreen} from '../../features/screens/restaurants.screen';
import {SafeArea} from '../../components/utility/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };
  const MapScreen = () => {
    return (
      <SafeArea>
        <View>
          <Text>Map</Text>
        </View>
      </SafeArea>
    );
  };

  const SettingsScreen = () => {
    return (
      <SafeArea>
        <View>
          <Text>Settings!</Text>
        </View>
      </SafeArea>
    );
  };

  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({size, color}) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
