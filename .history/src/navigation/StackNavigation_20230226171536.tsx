import { View, Text } from 'react-native'
import React, { FC } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/stackscreens/Cart';
import Homescreen from '../BottomTabs_Screens/Homescreen';

const Stack = createStackNavigator();

const StackNavigation:FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='homescreen' component={Homescreen} />
        <Stack.Screen name='cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigation