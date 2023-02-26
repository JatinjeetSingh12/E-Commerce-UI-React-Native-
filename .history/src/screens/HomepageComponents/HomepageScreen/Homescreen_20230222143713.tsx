import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../HomescreenComponents/Topbar';

const Homescreen: FC = () => {
  return (
    <Box>
      <Topbar />
    </Box>
  )
}

export default Homescreen

const styles = StyleSheet.create({})