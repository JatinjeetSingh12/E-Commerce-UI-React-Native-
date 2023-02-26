import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { Box,Image } from 'native-base'
import Data from '../../../Data/Data'



const Home: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  return (
    <Box h={height} w={width}>
      <FlatList pagingEnabled  data={Data} renderItem={({ item }) => {
        return (
          <Box width={width} height={height}>
            <Image source={{uri:item.img}} alt="Alternate Text" width={width} height={height}  />
          </Box>
        )
      }} />
    </Box>
  )
}

export default Home