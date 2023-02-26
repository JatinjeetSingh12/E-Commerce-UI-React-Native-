import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons,AntDesign } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {
  return (
    <Box backgroundColor="white" pt={5}  px={2}>
      <HStack width="90%"  justifyContent="space-evenly" pt={2}  space={5}>
        
        <Input  backgroundColor="white" mx="3"  placeholder="Search for Keyword" h="10" w="75%" />
        <MaterialIcons name="qr-code-scanner" style={{paddingTop:2}} size={26} color="black" />
        <EvilIcons name="cart" size={32} color="black" />
      </HStack>
    </Box>
  )
}

export default Topbar

