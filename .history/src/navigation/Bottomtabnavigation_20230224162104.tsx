import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../BottomTabs_Screens/Homescreen';
import Categoryscreen from '../BottomTabs_Screens/Categoryscreen';
import Whislistscreen from '../BottomTabs_Screens/Whislistscreen';
import Notificationscreen from  '../BottomTabs_Screens/Notificationscreen';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import Membershipscreen from '../BottomTabs_Screens/Membershipscreen';

const Tab = createBottomTabNavigator();

const Bottomtabnavigation: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor:'black',tabBarInactiveTintColor:'silver', }} >
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => {
                        return <Entypo name="home" size={24} color={focused?"black":"silver"} />
                    },
                    headerShown: false

                }} name="Homescreen" component={Homescreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => {
                        return <MaterialCommunityIcons name="text-search" size={24} color={focused?"black":"silver"} />
                    },
                    headerShown: false
                }} name="Categoryscreen" component={Categoryscreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => {
                        return <FontAwesome name="heart" size={24} color={focused?"black":"silver"} />
                    },
                    headerShown: false

                }} name="Whislistscreen" component={Whislistscreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons name="chatbox-ellipses" size={24} color={focused?"black":"silver"} />
                    },
                    headerShown: false

                }} name="Notificationscreen" component={Notificationscreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons name="chatbox-ellipses" size={24} color={focused?"black":"silver"} />
                    },
                    headerShown: false

                }} name="Membershipscreen" component={Membershipscreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Bottomtabnavigation

const styles = StyleSheet.create({})