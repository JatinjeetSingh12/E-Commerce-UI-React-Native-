import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Women_Category from '../screens/categoryScreen_TabScreen/Women_Category';
import Men_Category from '../screens/categoryScreen_TabScreen/Men_Category';
import Kids_Category from '../screens/categoryScreen_TabScreen/Kids_Category';
import Baby_Category from '../screens/categoryScreen_TabScreen/Baby_Category';

const Tab = createMaterialTopTabNavigator();

const CategoryTabview: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 13, fontWeight: '700' }, swipeEnabled: false, tabBarIndicatorStyle: { backgroundColor: 'black' } }}>
      <Tab.Screen name='Women' children={() => <Women_Category />} />
      <Tab.Screen name='Men' children={() => <Men_Category />} />
      <Tab.Screen name='Kids' children={() => <Kids_Category />} />
      <Tab.Screen name='Baby' children={() => <Baby_Category />} />
    </Tab.Navigator>
  )
}

export default CategoryTabview