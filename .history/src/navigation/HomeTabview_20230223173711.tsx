import { useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen_TabScreen/Home'
import Women from '../screens/HomeScreen_TabScreen/Women';
import Men from '../screens/HomeScreen_TabScreen/Men'
import Kids from '../screens/HomeScreen_TabScreen/Kids'
import Baby from '../screens/HomeScreen_TabScreen/Baby';

const Tab = createMaterialTopTabNavigator();

const HomeTabview: FC = () => {


    return (
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 13, fontWeight: '700' }, swipeEnabled: false, tabBarIndicatorStyle: { backgroundColor: 'black' } }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Women" children={() => <Women  />} />
            <Tab.Screen name="Men" children={() => <Men  />} />
            <Tab.Screen name="Kids" children={() => <Kids  />} />
            <Tab.Screen name="Baby" children={() => <Baby />} />
        </Tab.Navigator>
    )
}

export default HomeTabview
