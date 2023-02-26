import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import { ScrollView, } from 'native-base'
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

const Men: FC = () => {

  const [image, setimage] = useState<item[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section == 'men')])
  }

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "men")])
  }
  const [data, setdata] = useState<searchbyCategory[]>([])

  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'all')])
  }
  useEffect(() => {
    setimagefilter();
    set_bestsellercart_filter();
    setdatafilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageComp image={image} />
      <Topics />
      <BestSellerCart bestsellercart={bestSellercart} />
      <SearchbyCategory data={data} />

    </ScrollView>
  )
}

export default Men