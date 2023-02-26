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
            <Box top={300} pl={3} position={'absolute'}  >
                <Text fontWeight={'600'} fontSize={30} color={'white'}>New breathable Relaxed Collection</Text>
                <Text fontSize={16} color={'white'}>AirSense Jackets</Text>
                <Text fontWeight={'600'} fontSize={30} color={'white'}>Rs.5990.00</Text>
            </Box>
        </>
    )
}

export default ImageComp
