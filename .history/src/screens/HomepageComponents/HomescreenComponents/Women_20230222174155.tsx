import { View, Text,ScrollView } from 'react-native'
import React,{FC} from 'react'
import {Box,Image } from 'native-base'

const Women:FC = () => {
  const image = "https://media.laura.ca/image/upload/f_auto,q_auto,dpr_auto/remote_media/on/demandware.static/-/Library-Sites-LauraCanadaSharedLibrary/default/dw07b25bb6/melanie-lyne/2023/hp-spring-launch/ml-01.23.2023-Q1-SpringLaunch-homepage-mobile-01.jpg?_i=AG"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={500}  width="100%" />

    </ScrollView>
  )
}

export default Women