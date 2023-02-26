import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { Box, Image } from 'native-base'
import Data from '../../../Data/Data'



const Home: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  return (
    <Box h={height*0.76} w={width}>
      <FlatList alwaysBounceVertical={false} showsVerticalScrollIndicator={false} pagingEnabled data={Data} renderItem={({ item }) => {
        return (
          <ImageBackground source={{uri:item.img}} resizeMode="cover" style={{flex:1,height:height*0.76}}  />
        )
      }} />
    </Box>
  )
}

export default Home