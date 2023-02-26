import { View, ScrollView, Dimensions } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Box, Center, Image, Text } from 'native-base'
import BestSellerCart from '../WomenscreenComponents/BestSellerCart';
import Topics from '../WomenscreenComponents/Topics';
import images from '../../../Data/Images';
const Women: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const [image, setimage] = useState()

  const setimagefilter = () => {
    // setimage([...images.filter(e => e.category == "women")])
  }
  useEffect(() => {
    setimagefilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <Image source={{ uri: image }}
        alt="alternative text" height={height * 0.6} width="100%" />
      <Topics />
      <BestSellerCart />
    </ScrollView>
  )
}

export default Women