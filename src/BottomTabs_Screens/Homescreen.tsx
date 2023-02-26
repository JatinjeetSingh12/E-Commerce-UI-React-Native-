import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../../Components/HomescreenComponents/Topbar';
import HomeTabview from '../navigation/HomeTabview';
import { NavigationProp } from "@react-navigation/native";




const Homescreen: FC= ({}) => {

  return (
    <Box height="100%">
      <Topbar  />
      <HomeTabview />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})