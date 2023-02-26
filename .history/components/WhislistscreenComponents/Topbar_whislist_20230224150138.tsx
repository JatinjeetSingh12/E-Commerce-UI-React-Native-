import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons';

const Topbar_whislist: FC = () => {
    return (
        <Box>
            <HStack justifyContent={'space-between'}>
                <Text>WISH LIST</Text>
                <AntDesign name="shoppingcart" size={24} color="black" />
            </HStack>
        </Box>
    )
}

export default Topbar_whislist