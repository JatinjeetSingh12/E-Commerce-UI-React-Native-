import React, { FC, useState, useEffect } from 'react'
import Categorydata from '../../Data/Categorydata'
import List_Category from '../../../Components/CategoryscreenComponents/List_Category'
import { ScrollView } from 'native-base'

interface item {
  name: string,
  section: string
}
const Men_Category: FC = () => {
  const [data, setdata] = useState<item[]>([])

  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'all')])
  }
  useEffect(() => {
    setdatafilter();
  }, [])

  return (
    <ScrollView  showsVerticalScrollIndicator={false} backgroundColor={'white'}>
      <List_Category data={data} />
    </ScrollView>
  )
}

export default Men_Category