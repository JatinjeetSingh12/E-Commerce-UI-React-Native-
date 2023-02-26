import { View, Text, TextInput} from 'react-native'
import React, { FC } from 'react'
import {  Box, HStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons';


const Topbar_Category: FC = () => {
    return (
        <Box backgroundColor="white" pt={10} px={2}>

        <HStack width="100%" justifyContent="center" pt={2} >
          <HStack backgroundColor={'rgba(0, 0, 0, 0.1)'} pl={2} space={2} alignItems={'center'} borderRadius={5} width="95%" mx={2}>
            <AntDesign name="search1" size={24} color="rgba(0, 0, 0, 0.3)" />
            <TextInput placeholderTextColor='rgba(0, 0, 0, 0.3)' placeholder='Search for Keyword' style={{ height: 40, width: '88%' }} />
          </HStack>
  
        </HStack>
        
      </Box>
    )
}

export default Topbar_Category