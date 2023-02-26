import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import ImageComp from '../../../Components/HomescreenComponents/ImageComp'
import images from '../../Data/Images';
import Topics from '../../../Components/HomescreenComponents/Topics';
import BestSellerCart from '../../../Components/HomescreenComponents/BestSellerCart';
import Bestsellingcart from '../../Data/Bestsellingcart';
import Categorydata from '../../Data/Categorydata';
import SearchbyCategory from '../../../Components/HomescreenComponents/SearchbyCategory';

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


const Baby: FC = () => {
  const [image, setimage] = useState<item[]>([])
  const [bestSellercart, setbestSellercar] = useState<bestsellercart[]>([])

  const set_bestsellercart_filter = () => {
    setbestSellercar([...Bestsellingcart.filter(e => e.section == 'baby')])
  }

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "baby")])
  }
  const [data, setdata] = useState<searchbyCategory[]>([])

  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'baby')])
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

export default Baby

