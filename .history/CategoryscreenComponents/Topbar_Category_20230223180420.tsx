import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { Input,Box, HStack } from 'native-base'

const Topbar_Category:FC = () => {
  return (
    <HStack backgroundColor={'rgba(0, 0, 0, 0.1)'} w={'90%'}>
        <Input placeholder='' />
    </HStack>
  )
}

export default Topbar_Category