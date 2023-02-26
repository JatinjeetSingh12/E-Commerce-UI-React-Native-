import { ScrollView, } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import BestSellerCart from '../WomenscreenComponents/BestSellerCart';
import Topics from '../WomenscreenComponents/Topics';
import images from '../../../Data/Images';
import ImageComp from './ImageComp';


interface item {
  image: string,
  category: string
}

const Women: FC = () => {
  const [image, setimage] = useState<item[]>([])

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "women")])
  }

  useEffect(() => {
    setimagefilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageComp image={image}   />
      <Topics  />
      <BestSellerCart />
    </ScrollView>
  )
}

export default Women