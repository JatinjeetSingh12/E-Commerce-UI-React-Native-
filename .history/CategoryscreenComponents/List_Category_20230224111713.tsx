import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, Text, Center } from 'native-base'
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity'

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
          <TouchableOpacity>
            <Box py={3} my={2} borderBottomWidth={0.2} w={'95%'} key={index}>
              <Text fontSize={20} >{item.name}</Text>
            </Box>
          </TouchableOpacity>
        )
      })}
    </Center>
  )
}

export default List_Category