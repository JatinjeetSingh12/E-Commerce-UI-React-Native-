import React, { FC } from 'react'
import { Box, ScrollView, Text } from 'native-base'

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Box pl={3} backgroundColor={'white'} pb={3} pt={10}>
        <Text fontSize={28} fontWeight={'600'}>Membership</Text>
      </Box>
    </ScrollView>
  )
}

export default Membershipscreen

