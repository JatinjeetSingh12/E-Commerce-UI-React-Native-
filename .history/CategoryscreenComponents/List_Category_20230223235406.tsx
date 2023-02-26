import { View } from 'react-native'
import React,{FC} from 'react'
import { Box,Text, Center } from 'native-base'

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
            <Box my={2} borderBottomWidth={1} w={'95%'} key={index}>
                <Text   fontSize={20} >{item.name}</Text>
            </Box>
        )
      })}
    </Center>
  )
}

export default List_Category