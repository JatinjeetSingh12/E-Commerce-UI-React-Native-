import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import Topics from '../../../HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../HomescreenComponents/ImageComp';
import BestSellerCart from '../../../HomescreenComponents/BestSellerCart';
import Bestsellingcart from '../../Data/Bestsellingcart';
import Categorydata from '../../Data/Categorydata';
import SearchbyCategory from '../../../HomescreenComponents/SearchbyCategory';

interface searchbyCategory {
  name: string,
  section: string
}



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



interface item {
  image: string,
  category: string
}


const Kids: FC = () => {
  const [image, setimage] = useState<item[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section == 'kids')])
  }

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "kids")])
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

export default Kids

