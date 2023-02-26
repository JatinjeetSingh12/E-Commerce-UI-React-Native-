import React, { FC } from 'react'
import { Box, ScrollView, Text } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Box pl={3} backgroundColor={'white'} mb={2} pt={10}>
        <Text fontSize={28} fontWeight={'600'}>Membership</Text>
      </Box>
      <Scanner />
    </ScrollView>
  )
}

export default Membershipscreen

