import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Text } from 'native-base'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

const Topbar_whislist: FC = () => {
    return (
        <Box borderWidth={1}>
            <HStack justifyContent={'space-between'}>
                <Text>WISH LIST</Text>
                <AntDesign name="shoppingcart" size={24} color="black" />
            </HStack>
            <HStack justifyContent={'space-between'}>
                <Text>ITEM(S)</Text>
                <HStack>
                    <MaterialIcons name="grid-view" size={24} color="black" />
                    <Entypo name="edit" size={24} color="black" />
                </HStack>
            </HStack>

        </Box>
    )
}

export default Topbar_whislist