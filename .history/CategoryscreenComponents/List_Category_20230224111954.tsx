import { View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Box, Text, Center } from 'native-base'

interface item {
  name: string,
  section: string
}
type props = {
  data: item[]
}
const List_Category: FC<props> = ({ data }) => {
  return (
    <Center px={2}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={{ paddingVertical: 5, marginVertical: 2, borderBottomWidth: 0.2, width: '95%' }}>
            <Text fontSize={20} >{item.name}</Text>
          </TouchableOpacity>
        )
      })}
    </Center>
  )
}

export default List_Category