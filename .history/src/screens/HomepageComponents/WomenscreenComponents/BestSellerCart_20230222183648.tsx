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
            <Box flexWrap="wrap" px={2} justifyContent="space-between" flexDirection="row" >
                {cart.map((item, index) => {
                    return(
                        <Box key={index} mx={5} h={200} width="40%">
                        <Image source={{ uri: item.img }} h={100} w={70} alt="alternative text" />
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