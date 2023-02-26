import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import Categorydata from '../../Data/Categorydata'
import List_Category from '../../../CategoryscreenComponents/List_Category'
import { ScrollView } from 'native-base'

interface item {
  name: string,
  section: string
}
const Women_Category: FC = () => {
  const [data1, setdata1] = useState<item[]>([])
  const [data2, setdata2] = useState<item[]>([])
  const [data3, setdata3] = useState<item[]>([])

  const setdatafilter = () => {
    setdata1([...Categorydata.filter(e => e.section == 'all')])
    setdata2([...Categorydata.filter(e => e.section == 'women')])
    setdata3(data1.concat(data2))
  }
  // console.log(data3)
  useEffect(() => {
    setdatafilter();
  }, [])

  return (
    <ScrollView backgroundColor={'white'}>
      <List_Category data={data3} />
    </ScrollView>
  )
}

export default Women_Category