import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { Box, Image, ScrollView } from 'native-base'
import Data from '../../../Data/Data'



const Home: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;


  return (


    <Box h={height * 0.76} w={width}>
      <ScrollView showsVerticalScrollIndicator={false} pagingEnabled >
        {Data.map((item, index) => {
          return (
            <ScrollView key={index} horizontal pagingEnabled>
              <Image source={{ uri: item.img1 }} alt="Alternate Text" w={width} height={height * 0.76} />
              <Image source={{ uri: item.img2 }} alt="Alternate Text" w={width} height={height * 0.76} />
              <Image source={{ uri: item.img3 }} alt="Alternate Text" w={width} height={height * 0.76} />
              <Image source={{ uri: item.img4 }} alt="Alternate Text" w={width} height={height * 0.76} />
            </ScrollView>
          )
        })}

      </ScrollView>
    </Box>

  )
}

export default Home