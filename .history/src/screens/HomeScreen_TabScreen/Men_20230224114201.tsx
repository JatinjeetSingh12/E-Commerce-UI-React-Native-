import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import { ScrollView, } from 'native-base'
import Topics from '../../../HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../HomescreenComponents/ImageComp';
import BestSellerCart from '../../../HomescreenComponents/BestSellerCart';
import Bestsellingcart from '../../Data/Bestsellingcart';



interface item {
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

const Men: FC = () => {

  const [image, setimage] = useState<item[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section == 'men')])
  }

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "men")])
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

export default Men