import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import ImageComp from '../../../HomescreenComponents/ImageComp'
import images from '../../Data/Images';
import Topics from '../../../HomescreenComponents/Topics';
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


const Baby: FC = () => {
  const [image, setimage] = useState<item[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section == 'baby')])
  }

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "baby")])
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

export default Baby

