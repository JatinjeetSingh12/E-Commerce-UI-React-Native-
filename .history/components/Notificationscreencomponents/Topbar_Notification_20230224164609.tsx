import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack,Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 

const Topbar_Notification:FC = () => {
  return (
    <Box backgroundColor={'white'} pt={8}>
      <HStack py={5} px={3} justifyContent={'space-between'}>
        <Text>Notification</Text>
        <AntDesign name="shoppingcart" size={24} color="black" />
      </HStack>
    </Box>
  )
}

export default Topbar_Notification