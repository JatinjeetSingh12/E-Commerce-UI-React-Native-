import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, Text ,Center} from 'native-base'
import cart from '../../../Data/Cart'

const BestSellerCart: FC = () => {
    return (
        <Box>
            <Center >
                <Text fontWeight='500' fontSize={25} py={30}>BESTSELLERS</Text>
            </Center>
        </Box>
    )
}

export default BestSellerCart