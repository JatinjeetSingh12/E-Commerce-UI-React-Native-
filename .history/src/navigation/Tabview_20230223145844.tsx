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
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 12,fontWeight:'700' }, swipeEnabled: false,tabBarIndicatorStyle:{backgroundColor:'black'} }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Women" component={Women} />
            <Tab.Screen name="Men" component={Men} />
            <Tab.Screen name="Kids" component={Kids} />
            <Tab.Screen name="Baby" component={Baby} />
        </Tab.Navigator>
    )
}

export default Tabview
