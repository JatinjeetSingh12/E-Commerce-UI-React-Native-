import { View } from 'react-native'
import React,{FC} from 'react'
import { Box, Center ,Text} from 'native-base'

const SearchbyCategory:FC = () => {
  return (
    <Box>
        <Center >
                <Text fontWeight='500' fontSize={25} py={30}>BESTSELLERS</Text>
            </Center>
    </Box>
  )
}

export default SearchbyCategory