import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {
  return (
    <Box backgroundColor="white" pt={5}  px={2}>
      <HStack width="90%"  justifyContent="space-evenly"  space={5}>

        <Input  backgroundColor="grey" mx="3" placeholder="Search for Keyword" w="70%" />
        <MaterialIcons name="qr-code-scanner" size={24} color="black" />
        <EvilIcons name="cart" size={26} color="black" />
      </HStack>
    </Box>
  )
}

export default Topbar

