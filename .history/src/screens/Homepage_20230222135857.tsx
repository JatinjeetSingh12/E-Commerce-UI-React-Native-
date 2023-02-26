import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack } from "native-base";
import Topbar from '../components/Topbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './HomepageComponents/Homescreen';
import Category from './HomepageComponents/Categoryscreen';
import Whislist from './HomepageComponents/Whislistscreen';
import Notification from './HomepageComponents/Notificationscreen';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const Homepage: FC = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen  name="Home" component={Homescreen} />
                    <Tab.Screen name="Category" component={Category} />
                    <Tab.Screen name="Whislist" component={Whislist} />
                    <Tab.Screen name="Notification" component={Notification} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Homepage

const styles = StyleSheet.create({})