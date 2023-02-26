import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../screens/HomeScreen_TabScreen/Topbar';
import HomeTabview from '../navigation/HomeTabview';
const Homescreen: FC = () => {
  return (
    <Box height="100%">
      <Topbar />
      <HomeTabview />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})