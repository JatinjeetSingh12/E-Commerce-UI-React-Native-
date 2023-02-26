import { View, Text } from 'react-native'
import React, { FC } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/stackscreens/Cart';
import Homescreen from '../BottomTabs_Screens/Homescreen';


type RootStackParamList = {
  Cart: { userId: string };
};


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation:FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigation