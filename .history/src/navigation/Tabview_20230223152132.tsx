import { useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Women from '../screens/HomepageScreens/HomescreenComponents/Women';
import Home from '../screens/HomepageScreens/HomescreenComponents/Home';
import Men from '../screens/HomepageScreens/HomescreenComponents/Men';
import Kids from '../screens/HomepageScreens/HomescreenComponents/Kids';
import Baby from '../screens/HomepageScreens/HomescreenComponents/Baby';

const Tab = createMaterialTopTabNavigator();

const Tabview: FC = () => {


    return (
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 13, fontWeight: '700' }, swipeEnabled: false, tabBarIndicatorStyle: { backgroundColor: 'black' } }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Women" children={() => <Women women="women" />} />
            <Tab.Screen name="Men" children={() => <Men men="men" />} />
            <Tab.Screen name="Kids" children={() => <Women kids="kids" />} />
            <Tab.Screen name="Baby" children={() => <Women baby="baby" />} />
        </Tab.Navigator>
    )
}

export default Tabview
