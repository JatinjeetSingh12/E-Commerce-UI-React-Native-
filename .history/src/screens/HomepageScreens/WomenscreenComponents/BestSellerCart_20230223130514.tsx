import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, Text, Center, Image, VStack } from 'native-base'
import cart from '../../../Data/Cart'

const BestSellerCart: FC = () => {
    return (
        <Box>
            <Center >
                <Text fontWeight='500' fontSize={25} py={30}>BESTSELLERS</Text>
            </Center>

            <Box flexWrap="wrap" my={5} justifyContent="space-between" flexDirection="row" >
                {cart.map((item, index) => {
                    return (
                        <Box key={index} py={2} px={1} h={250} width="32%">
                            <Image source={{ uri: item.img }} w="100%" h={"70%"} alt="alternative text" />
                            <VStack>
                                <Text fontWeight={'bold'}>{item.title}</Text>
                                <Text fontWeight={'light'} fontSize={10}>{item.desc}</Text>
                                <Text>Rs.{item.prize}</Text>
                            </VStack>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default BestSellerCart