import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box,HStack,Input } from 'native-base';
import Topbar from '../HomescreenComponents/Topbar';

const Homescreen: FC = () => {
  return (
    <Box>
        <Box pt={5} px={2}>
      <HStack width="90%" space={1}>
      <Input backgroundColor="white" mx="3" placeholder="Input" w="70%" />
      </HStack>
    </Box>
    </Box>
  )
}

export default Homescreen

const styles = StyleSheet.create({})