import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Foryou from '../screens/NotificationScreen_Tabscreen/Foryou';
import WhatsNew from '../screens/NotificationScreen_Tabscreen/WhatsNew';

const Tab = createMaterialTopTabNavigator();


const NotificationTabview: FC = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 13, fontWeight: '700' },  tabBarIndicatorStyle: { backgroundColor: 'black' } }}>
            <Tab.Screen name='foryou' component={Foryou} />
            <Tab.Screen name='whatsnew' component={WhatsNew} />
        </Tab.Navigator>
    )
}

export default NotificationTabview