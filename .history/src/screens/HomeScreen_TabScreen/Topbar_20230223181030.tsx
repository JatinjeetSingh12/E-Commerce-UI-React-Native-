import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { FC } from 'react'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Box, HStack, Input } from "native-base";


const Topbar: FC = () => {

  return (
    <Box backgroundColor="white" pt={10} px={2}>

      <HStack width="100%" justifyContent="space-evenly" pt={2} space={8}>

        <HStack backgroundColor={'rgba(0, 0, 0, 0.1)'} pl={2} space={2} alignItems={'center'} borderRadius={5} width="70%" mx={2}>
          <AntDesign name="search1" size={24} color="rgba(0, 0, 0, 0.3)" />
          <TextInput placeholderTextColor='rgba(0, 0, 0, 0.3)' placeholder='Search for Keyword' style={{ height: 40, width: '88%' }} />
        </HStack>

        <MaterialIcons name="qr-code-scanner" style={{ paddingTop: 5 }} size={24} color="black" />
        <EvilIcons name="cart" size={28} style={{ paddingTop: 6, paddingRight: 8 }} color="black" />
      </HStack>
      
    </Box>
  )
}

export default Topbar

