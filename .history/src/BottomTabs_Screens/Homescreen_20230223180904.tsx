import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../screens/HomeScreen_TabScreen/Topbar';
import { TabView } from 'react-native-tab-view';
const Homescreen: FC = () => {
  return (
    <Box height="100%">
      <Topbar />
      <Tabview />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})