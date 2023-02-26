import { useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Women from '../screens/HomepageComponents/HomescreenComponents/Women';
import Home from '../screens/HomepageComponents/HomescreenComponents/Home';
import Men from '../screens/HomepageComponents/HomescreenComponents/Men';
import Kids from '../screens/HomepageComponents/HomescreenComponents/Kids';
import Baby from '../screens/HomepageComponents/HomescreenComponents/Baby';

const Tab = createMaterialTopTabNavigator();

const Tabview: FC = () => {


    return (


        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 11,fontWeight:'200' }, swipeEnabled: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Women" component={Women} />
            <Tab.Screen name="Men" component={Men} />
            <Tab.Screen name="Kids" component={Kids} />
            <Tab.Screen name="Baby" component={Baby} />
        </Tab.Navigator>
    )
}

export default Tabview
