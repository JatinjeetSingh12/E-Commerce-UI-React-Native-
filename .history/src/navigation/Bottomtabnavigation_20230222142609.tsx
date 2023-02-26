import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/HomepageComponents/HomepageScreen/Homescreen';
import Categoryscreen from '../screens/HomepageComponents/HomepageScreen/Categoryscreen';
import Whislistscreen from '../screens/HomepageComponents/HomepageScreen/Whislistscreen';
import Notificationscreen from '../screens/HomepageComponents/HomepageScreen/Notificationscreen';
import { Entypo,MaterialCommunityIcons,FontAwesome,Ionicons } from '@expo/vector-icons';
import Membershipscreen from '../screens/HomepageComponents/HomepageScreen/Membershipscreen';

const Tab = createBottomTabNavigator();

const Bottomtabnavigation: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    tabBarIcon: () => {
                        return <Entypo name="home" size={24} color="black" />
                    },
                }} name="Homescreen" component={Homescreen} />
                <Tab.Screen options={{
                    tabBarIcon: () => {
                        return <MaterialCommunityIcons name="text-search" size={24} color="black" />
                    },
                    headerShown:false
                }} name="Categoryscreen" component={Categoryscreen} />
                <Tab.Screen options={{
                    tabBarIcon: () => {
                        return <FontAwesome name="heart" size={24} color="black" />
                    }
                }} name="Whislistscreen" component={Whislistscreen} />
                <Tab.Screen options={{
                    tabBarIcon: () => {
                        return <Ionicons name="chatbox-ellipses" size={24} color="black" />
                    }
                }} name="Notificationscreen" component={Notificationscreen} />
                <Tab.Screen options={{
                    tabBarIcon: () => {
                        return <Ionicons name="chatbox-ellipses" size={24} color="black" />
                    }
                }} name="Membershipscreen" component={Membershipscreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Bottomtabnavigation

const styles = StyleSheet.create({})