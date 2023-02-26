import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { Input,Box, HStack } from 'native-base'
import {  AntDesign } from '@expo/vector-icons';


const Topbar_Category:FC = () => {
  return (
    <HStack backgroundColor={'rgba(0, 0, 0, 0.1)'} w={'90%'} alignItems={'center'} borderRadius={5}>
         <AntDesign name="search1" size={24} color="rgba(0, 0, 0, 0.3)" />
        <Input placeholder='' />
    </HStack>
  )
}

export default Topbar_Category