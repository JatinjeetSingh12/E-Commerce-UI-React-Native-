import React, { FC } from 'react'
import { Box, HStack, ScrollView, Text, VStack } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Box pl={3} backgroundColor={'white'} mb={4} pb={2} pt={10}>
        <Text fontSize={28} fontWeight={'600'}>Membership</Text>
      </Box>
      <Scanner />
      <Box backgroundColor={'white'}  w={'100%'}>
        <VStack space={5}>

        <HStack >
        <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
        <Box  w={'100%'}  borderBottomWidth={1}>
          <Text>COUPON</Text>
        </Box>
        </HStack>
        </VStack>
        <HStack>
        <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
        <Box>
          <Text>STORE SERVICE SURVEY</Text>
        </Box>
        </HStack>
      </Box>
    </ScrollView>
  )
}

export default Membershipscreen

