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
  const [data, setdata] = useState<item[]>([])
  const [moredata, setmoredata] = useState<item[]>([])

  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'all')])
    // setmoredata([...Categorydata.filter(e => e.section == 'women')])
  }
  useEffect(() => {
    setdatafilter();
  }, [])

  return (
    <ScrollView>
      <List_Category data={data} />
    </ScrollView>
  )
}

export default Women_Category