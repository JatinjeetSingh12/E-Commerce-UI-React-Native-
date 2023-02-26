import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { Input,Box, HStack } from 'native-base'
import {  AntDesign } from '@expo/vector-icons';


const Topbar_Category:FC = () => {
  return (
    <HStack pt={20} borderWidth={1} w={'90%'} alignItems={'center'} borderRadius={5}>
         <AntDesign name="search1" size={24} color="rgba(0, 0, 0, 0.3)" />
        <Input placeholderTextColor='rgba(0, 0, 0, 0.3)' placeholder='Search for Keyword' style={{ height: 40, width: '88%' }} />
    </HStack>
  )
}

export default Topbar_Category