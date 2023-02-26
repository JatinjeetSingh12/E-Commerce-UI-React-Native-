import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';



const History: FC = () => {
    return (
        <Box my={4} py={4} backgroundColor={'white'} w={'100%'}>
            <Text pl={3} mb={5}  fontWeight={'700'} >HISTORY</Text>
            <VStack space={4}>

                <HStack space={4} >
                    <Feather name="lock" size={24} color="black" />
                    <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>PURCHASE HISTORY</Text>
                    </Box>
                </HStack>

                <HStack space={4}>
                    <MaterialCommunityIcons name="history" size={24} color="black" />
                    <Box>
                        <Text fontSize={18}>ORDER HISTORY</Text>
                    </Box>
                </HStack>

            </VStack>
        </Box>
    )
}

export default History