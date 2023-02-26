import { View, Text,ScrollView,Dimensions } from 'react-native'
import React,{FC} from 'react'
import {Box,Image, } from 'native-base'

const Women:FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const image = "https://assets.ajio.com/medias/sys_master/root/20220318/HBSV/62342213aeb26921afe285ca/-288Wx360H-463624230-blue-MODEL.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={height*0.7}  width={width} />

    </ScrollView>
  )
}

export default Women