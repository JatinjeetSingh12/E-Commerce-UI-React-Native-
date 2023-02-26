import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box } from 'native-base';
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