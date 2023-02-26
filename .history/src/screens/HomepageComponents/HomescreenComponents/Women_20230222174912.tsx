import { View, Text,ScrollView,Dimensions } from 'react-native'
import React,{FC} from 'react'
import {Box,Center,Image, } from 'native-base'

const Women:FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const image = "https://cdn.luxe.digital/media/20220317111104/best-baseball-caps-women-reviews-luxe-digital.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={height*0.6}  width="100%" />
       <Center >
       <Text style={{fontWeight:'500',fontSize:20}}>TOPICS</Text>
       </Center>

    </ScrollView>
  )
}

export default Women