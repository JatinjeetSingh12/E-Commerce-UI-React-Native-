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

            <Box flexWrap="wrap"  justifyContent="space-between" flexDirection="row" >
                {cart.map((item, index) => {
                    return (
                        <Box key={index} py={2} px={2} h={250} width="31%">
                            <Image source={{ uri: item.img }} w="100%" h={"70%"} alt="alternative text" />
                            <VStack>
                                <Text>{item.title}</Text>
                                <Text>{item.desc}</Text>
                                <Text>{item.prize}</Text>
                            </VStack>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default BestSellerCart