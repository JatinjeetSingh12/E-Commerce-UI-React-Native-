import { View, Text,ScrollView } from 'react-native'
import React,{FC} from 'react'
import {Box,Image } from 'native-base'

const Women:FC = () => {
  const image = "https://5.imimg.com/data5/ANDROID/Default/2021/5/KP/LP/UH/128351771/product-jpeg-500x500.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text"  width="100%" />

    </ScrollView>
  )
}

export default Women