import { View, Text } from 'react-native'
import React,{FC} from 'react'


type props = {
  men: string
}

const Men:FC<props> = ({men}) => {
  return (
    <View>
      <Text>Men</Text>
    </View>
  )
}

export default Men