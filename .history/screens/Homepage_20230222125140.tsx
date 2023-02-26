import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack } from "native-base";
import Topbar from '../components/Topbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './Homescreen';
import Category from './Category';
import Whislist from './Whislist';
import Notification from './Notification';

const Tab = createBottomTabNavigator();

const Homepage: FC = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Whislist" component={Whislist} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    )
}

export default Homepage

const styles = StyleSheet.create({})