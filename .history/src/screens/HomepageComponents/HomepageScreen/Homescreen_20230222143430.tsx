import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box,HStack,Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; 

const Homescreen: FC = () => {
  return (
    <Box>
        <Box pt={5} px={2}>
      <HStack width="90%" space={1}>
      <Input backgroundColor="white" mx="3" placeholder="Input" w="70%" />
<MaterialIcons name="qr-code-scanner" size={24} color="black" />
      </HStack>
    </Box>
    </Box>
  )
}

export default Homescreen

const styles = StyleSheet.create({})