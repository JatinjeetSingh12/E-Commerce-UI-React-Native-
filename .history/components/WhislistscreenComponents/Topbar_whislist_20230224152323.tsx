import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

const Topbar_whislist: FC = () => {
    return (
        <Box  pt={9} backgroundColor={'white'}>
            <VStack justifyContent={'space-around'} space={8} py={4}>
                <HStack px={2} justifyContent={'space-between'}>
                    <Text fontWeight={'500'} fontSize={22}>WISH LIST</Text>
                    <AntDesign name="shoppingcart" size={24}  color="black" />
                </HStack>

                <HStack px={2} justifyContent={'space-between'}>
                    <Text pl={4}>ITEM(S)</Text>
                    <HStack  w={'20%'} justifyContent={'space-evenly'}>
                        <MaterialIcons name="grid-view" style={{opacity:0.6}} size={24} color="black" />
                        <Entypo name="edit" size={24} style={{opacity:0.6}} color="black" />
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Topbar_whislist