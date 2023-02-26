import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { Box } from 'native-base'

interface  item {
    name: string,
    section: string
}
type props = {
    data:item[]
}
const List_Category:FC<props> = ({data}) => {
  return (
    <View>
      {data.map((item,index)=>{
        return(

            <Box borderBottomWidth={1} w={'90%'} key={index}>
                <Text>{item.name}</Text>
            </Box>
        )
      })}
    </View>
  )
}

export default List_Category