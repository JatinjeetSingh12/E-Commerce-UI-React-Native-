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
            <Box flexWrap="wrap" flexDirection="row" >
                {cart.map((item, index) => {
                    <Box key={index} h={50} width={50}>
                        <Image source={{ uri: item.img }} alt="alternative text" />
                        <VStack>
                            <Text>{item.title}</Text>
                            <Text>{item.desc}</Text>
                            <Text>{item.prize}</Text>
                        </VStack>
                    </Box>
                })}
            </Box>
        </Box>
    )
}

export default BestSellerCart