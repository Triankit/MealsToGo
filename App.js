import React from 'react';
import {View, Text} from 'react-native';
import {RestaurantsScreen} from './src/features/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utility/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantContextProvider} from './src/components/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/components/services/location/location.context';

const App = () => {
  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };

  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({size, color}) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  function MapScreen() {
    return (
      <SafeArea>
        <View>
          <Text>Map</Text>
        </View>
      </SafeArea>
    );
  }

  function SettingsScreen() {
    return (
      <SafeArea>
        <View>
          <Text>Settings!</Text>
        </View>
      </SafeArea>
    );
  }
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
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
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
};

export default App;
