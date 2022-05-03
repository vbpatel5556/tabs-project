import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsRoutes from './TabsRoutes';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen component={HomeScreen} name="Home" />
                <Drawer.Screen component={ExploreScreen} name="Explore" />
                <Drawer.Screen component={ProfileScreen} name="Profile" />
                <Drawer.Screen component={TabsRoutes} name="Tabs" />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})