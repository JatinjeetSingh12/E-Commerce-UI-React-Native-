import React, { FC } from 'react'
import { Box, HStack, ScrollView, Text, VStack } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'
import Coupon from '../../Components/Membershipcomponents/Coupon'

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Box pl={3} backgroundColor={'white'} mb={4} pb={2} pt={10}>
        <Text fontSize={28} fontWeight={'600'}>Membership</Text>
      </Box>
      <Scanner />
      <Coupon />
      
    </ScrollView>
  )
}

export default Membershipscreen

