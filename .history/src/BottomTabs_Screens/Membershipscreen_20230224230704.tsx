import React, { FC } from 'react'
import { Box, HStack, ScrollView, Text } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Box pl={3} backgroundColor={'white'} mb={4} pb={2} pt={10}>
        <Text fontSize={28} fontWeight={'600'}>Membership</Text>
      </Box>
      <Scanner />
      <Box>
        <HStack>
        <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
        <Box>
          <Text>COUPON</Text>
        </Box>
        </HStack>
        <HStack>
        <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
        <Box>
          <Text>COUPON</Text>
        </Box>
        </HStack>
      </Box>
    </ScrollView>
  )
}

export default Membershipscreen

