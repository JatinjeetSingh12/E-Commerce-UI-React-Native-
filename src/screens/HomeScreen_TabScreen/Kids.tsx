import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import Topics from '../../../Components/HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../Components/HomescreenComponents/ImageComp';
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

export default Kids

