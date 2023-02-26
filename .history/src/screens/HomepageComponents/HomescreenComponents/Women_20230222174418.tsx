import { View, Text,ScrollView,Dimensions } from 'react-native'
import React,{FC} from 'react'
import {Box,Image, } from 'native-base'

const Women:FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const image = "https://static.fibre2fashion.com//articleresources/images/87/8609/fashion%20women-small_Small.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={height*0.6}  width={width} />

    </ScrollView>
  )
}

export default Women