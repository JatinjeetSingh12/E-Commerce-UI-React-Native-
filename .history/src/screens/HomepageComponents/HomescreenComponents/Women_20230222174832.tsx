import { View, Text,ScrollView,Dimensions } from 'react-native'
import React,{FC} from 'react'
import {Box,Image, } from 'native-base'

const Women:FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const image = "https://cdn.luxe.digital/media/20220317111104/best-baseball-caps-women-reviews-luxe-digital.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={height*0.6}  width="100%" />

       <Text style={{fontWeight:'500'}}>TOPICS</Text>

    </ScrollView>
  )
}

export default Women