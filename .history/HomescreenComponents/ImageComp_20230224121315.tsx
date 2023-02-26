import { Dimensions } from 'react-native'
import React, { FC } from 'react'
import { Box, Image, Text } from 'native-base'

interface item {
    image: string,
    category: string
}

type props = {
    image: item[]
}

const ImageComp: FC<props> = ({ image }) => {
    const height = Dimensions.get('screen').height;
    return (
        <>
            {image.map((item, index) => {
                return (
                    <Image key={index} source={{ uri: item.image }} alt="alternative text" height={height * 0.6} width="100%" />
                )
            })}
            <Box bottom={20} position={'absolute'}  >
                <Text fontSize={30} color={'white'}>New breathable workwear Collection</Text>
                <Text color={'white'}>AirSense Jackets</Text>
                <Text color={'white'}>Rs.5990.00</Text>
            </Box>
        </>
    )
}

export default ImageComp
