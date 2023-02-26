import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

const Topbar_whislist: FC = () => {
    return (
        <Box borderWidth={1} pt={12} backgroundColor={'white'}>
            <VStack justifyContent={'space-around'}>

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
            </VStack>

        </Box>
    )
}

export default Topbar_whislist