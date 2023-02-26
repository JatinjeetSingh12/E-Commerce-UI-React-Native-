import { Box,Text } from 'native-base'
import React, { FC } from 'react'

const Topbar: FC = () => {
  return (
    <Box pl={3} backgroundColor={'white'} mb={4} pb={2} pt={10}>
      <Text fontSize={28} fontWeight={'600'}>Membership</Text>
    </Box>
  )
}

export default Topbar