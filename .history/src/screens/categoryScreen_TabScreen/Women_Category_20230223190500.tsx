import { View, Text } from 'react-native'
import React,{FC,useState} from 'react'

interface item{
  name:string,
  section:string
}
const Women_Category:FC = () => {
  const [data,setdata] = useState<item[]>([])
  const setdatafilter = () => {
    
  }
  return (
    <View>
      <Text>Women</Text>
    </View>
  )
}

export default Women_Category