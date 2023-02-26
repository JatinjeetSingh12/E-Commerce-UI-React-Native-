import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {
  return (
    <Box backgroundColor="white" pt={5} px={2}>
      <HStack width="90%" justifyContent="space-evenly" space={1}>
        <Input backgroundColor="white" mx="3" placeholder="Input" w="70%" />
        <MaterialIcons name="qr-code-scanner" size={24} color="black" />
        <EvilIcons name="cart" size={26} color="black" />
      </HStack>
    </Box>
  )
}

export default Topbar

