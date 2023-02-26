import { ScrollView, } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import Topics from '../../../Components/HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../Components/HomescreenComponents/ImageComp';
import BestSellerCart from '../../../Components/HomescreenComponents/BestSellerCart';
import Bestsellingcart from '../../Data/Bestsellingcart';
import SearchbyCategory from '../../../Components/HomescreenComponents/SearchbyCategory';
import Categorydata from '../../Data/Categorydata';

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

interface searchbyCategory {
  name: string,
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
      <SearchbyCategory data={data}  />
    </ScrollView>
  )
}

export default Women