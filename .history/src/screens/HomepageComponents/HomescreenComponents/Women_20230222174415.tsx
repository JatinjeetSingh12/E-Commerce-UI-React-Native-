import { View, Text,ScrollView,Dimensions } from 'react-native'
import React,{FC} from 'react'
import {Box,Image, } from 'native-base'

const Women:FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const image = "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2019/11/6/a373d08e-a2fb-4cbf-9a19-dd9679ea0c181573032453223-Libas-Women-Dresses-7681573032451400-1.jpg"
  return (
    <ScrollView>
      <Image source={{uri:image}}
       alt="alternative text" height={height*0.6}  width={width} />

    </ScrollView>
  )
}

export default Women