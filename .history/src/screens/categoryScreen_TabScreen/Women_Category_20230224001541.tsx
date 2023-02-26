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

  const setdata1filter = () => {
    setdata1([...Categorydata.filter(e => e.section == 'all')])
  }
  useEffect(() => {
    setdata1filter()
  }, [])

  return (
    <ScrollView  showsVerticalScrollIndicator={false} backgroundColor={'white'}>
      <List_Category data={data1} />
    </ScrollView>
  )
}

export default Women_Category