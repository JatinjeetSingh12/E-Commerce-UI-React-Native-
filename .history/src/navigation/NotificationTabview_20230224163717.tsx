import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const NotificationTabview: FC = () => {
    return (
        <View>
            <Text>NotificationTabview</Text>
        </View>
    )
}

export default NotificationTabview