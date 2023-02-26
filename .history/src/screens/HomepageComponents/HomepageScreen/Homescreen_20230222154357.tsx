import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../HomescreenComponents/Topbar';
import Tabview from '../../../navigation/Tabview';

const Homescreen: FC = () => {
  return (
    <Box >
      <Topbar />
      <Tabview />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})