import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HomeStack } from './HomeStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

function TabsRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'darkblue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeStack}
          options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} style={{ paddingBottom: 10 }} />
            ),
            tabBarStyle: {
              display: getTabBarVisibility(route),
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              position: 'absolute',
              bottom: 0
            },
          })}
        />
        <Tab.Screen name="Explore" component={ExploreScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="paper-plane" color={color} size={size} style={{ paddingBottom: 10 }} />
            ),
            tabBarStyle: {
              display: getTabBarVisibility(route),
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              position: 'absolute',
              bottom: 0
            },
          })}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} style={{ paddingBottom: 10 }} />
            ),
            tabBarStyle: {
              display: getTabBarVisibility(route),
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              position: 'absolute',
              bottom: 0
            },
          })}
        />
      </Tab.Navigator>
  )
}

export default TabsRoutes

const getTabBarVisibility = route => {
    console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    console.log(routeName);
  
    if (routeName == 'DetailsScreen' || routeName == 'ExtraDetailsScreen') {
      return 'none';
    }
    return 'flex';
  };

const styles = StyleSheet.create({})