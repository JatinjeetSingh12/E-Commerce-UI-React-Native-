import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { Box, Image, ScrollView } from 'native-base'
import Data from '../../../Data/Data'



const Home: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;


  return (


    <Box h={height * 0.76} w={width}>
      <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false}  pagingEnabled >
        {Data.map((item,index)=>{
       return <ImageBackground key={index} source={{ uri: item.img1 }} resizeMode="cover" style={{ flex: 1, height: height * 0.76 }} />
        })}

      </ScrollView>
    </Box>

  )
}

export default Home