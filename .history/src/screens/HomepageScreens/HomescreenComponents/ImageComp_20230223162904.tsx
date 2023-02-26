import {  Dimensions } from 'react-native'
import React, { FC } from 'react'
import { Box,Image } from 'native-base'

interface item {
    image: string,
    category: string
}

type props = {
    image: item[]
}

const ImageComp: FC<props> = ({ image }) => {
    console.log(image)

    const height = Dimensions.get('screen').height;

    return (
        <Box>
            {image.map((item,index) => {
                <Image key={index} source={{uri:item.image}} alt="alternative text"  height={height * 0.6} width="100%" />
            })}
        </Box>
    )
}

export default ImageComp
