import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {
  return (
    <Box backgroundColor="white" pt={5} px={2}>
      <HStack width="100%" justifyContent="space-evenly" pt={2} space={8}>
        <Box>
          <AntDesign name="search1" size={24} color="black" />
          <Input backgroundColor="white" mx="3" placeholder="Search for Keyword" h="10" w="75%" />
        </Box>
        <MaterialIcons name="qr-code-scanner" style={{ paddingTop: 5 }} size={24} color="black" />
        <EvilIcons name="cart" size={28} style={{ paddingTop: 6, paddingRight: 8 }} color="black" />
      </HStack>
    </Box>
  )
}

export default Topbar

