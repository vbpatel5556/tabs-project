import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ExtraDetails from '../screens/ExtraDetails';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="ExtraDetailsScreen" component={ExtraDetails} />
        </Stack.Navigator>
    )
}
export { HomeStack }
