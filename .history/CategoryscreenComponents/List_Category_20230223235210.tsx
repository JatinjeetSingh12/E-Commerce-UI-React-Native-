import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { Box, Center } from 'native-base'

interface  item {
    name: string,
    section: string
}
type props = {
    data:item[]
}
const List_Category:FC<props> = ({data}) => {
  return (
    <Center>
      {data.map((item,index)=>{
        return(

            <Box borderBottomWidth={1} w={'90%'} key={index}>
                <Text>{item.name}</Text>
            </Box>
        )
      })}
    </Center>
  )
}

export default List_Category