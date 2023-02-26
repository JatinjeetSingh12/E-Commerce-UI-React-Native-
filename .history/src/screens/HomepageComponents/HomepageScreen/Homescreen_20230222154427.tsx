import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../HomescreenComponents/Topbar';
import Tabview from '../../../navigation/Tabview';

const Homescreen: FC = () => {
  return (
    <Box height="100%">
      <Topbar />
      <Tabview />
      <Carousal />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})