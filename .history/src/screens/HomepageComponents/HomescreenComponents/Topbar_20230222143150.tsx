import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {
  return (
    <Box pt={15} px={2}>
      <HStack width="90%" space={1}>
      <Input backgroundColor="white" mx="3" placeholder="Input" w="70%" />
      </HStack>
    </Box>
  )
}

export default Topbar

