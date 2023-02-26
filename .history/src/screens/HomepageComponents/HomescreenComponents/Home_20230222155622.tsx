import { View, Text, FlatList } from 'react-native'
import React, { FC } from 'react'
import {Box} from 'native-base'
import Data from '../../../Data/Data'


const Home: FC = () => {
  
  return (
    <Box>
      <FlatList data={Data} renderItem={({item})=>{
        return (
          <>
          </>
        )
      }}/>
    </Box>
  )
}

export default Home