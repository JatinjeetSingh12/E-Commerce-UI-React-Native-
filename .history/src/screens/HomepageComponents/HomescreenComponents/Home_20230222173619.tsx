import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { Box, Button, Center, Image, ScrollView, VStack } from 'native-base'
import Data from '../../../Data/Data'



const Home: FC = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const Imagetext = () => {
    return (
      <Center flex={1} justifyContent="flex-end"  backgroundColor="gray.600">
        <VStack space={5}>

          <Text style={{ fontWeight: '600', fontSize: 22, alignSelf: 'center', color: 'white' }}>THE POWER OF CLOTHING</Text>

          <Text style={{ fontWeight: '500', fontSize: 14, alignSelf: 'center', color: 'white' }}>
            Roger Federer in Conversation with Tadashi Yanai
          </Text>

          <Center>
            <Button backgroundColor="white" color="black" w="30%"><Text>View More</Text></Button>
          </Center>
        </VStack>

      </Center>
    )
  }


  return (


    <Box h={height * 0.76} w={width}>
      <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false} pagingEnabled >
        {Data.map((item, index) => {
          return (
            <ScrollView key={index} horizontal pagingEnabled>
              <ImageBackground source={{ uri: item.img1 }} resizeMode="cover" style={{ flex: 1, height: height * 0.76, width: width }}>
                <Imagetext />
              </ImageBackground>
              <ImageBackground source={{ uri: item.img2 }} resizeMode="cover" style={{ flex: 1, height: height * 0.76, width: width }}>
                <Imagetext />
              </ImageBackground>
              <ImageBackground source={{ uri: item.img3 }} resizeMode="cover" style={{ flex: 1, height: height * 0.76, width: width }}>
                <Imagetext  />
              </ImageBackground>
              <ImageBackground source={{ uri: item.img4 }} resizeMode="cover" style={{ flex: 1, height: height * 0.76, width: width }}>
                <Imagetext  />
              </ImageBackground>
            </ScrollView>
          )
        })}
      </ScrollView>
    </Box>

  )
}

export default Home