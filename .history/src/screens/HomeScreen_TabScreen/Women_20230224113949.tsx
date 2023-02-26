import { ScrollView, } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import Topics from '../../../HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../HomescreenComponents/ImageComp';
import BestSellerCart from '../../../HomescreenComponents/BestSellerCart';
import Bestsellingcart from '../../Data/Bestsellingcart';

interface image {
  image: string,
  category: string
}

interface bestsellercart {
  img: string,
  title: string,
  desc: string,
  prize: string,
  section: string
}



const Women: FC = () => {
  const [image, setimage] = useState<image[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "women")])
  }

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section=='women')])
  }

  useEffect(() => {
    setimagefilter();
    set_bestsellercart_filter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageComp image={image} />
      <Topics />
      <BestSellerCart bestsellercart={bestSellercart} />
    </ScrollView>
  )
}

export default Women