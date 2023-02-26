import React, { FC, useState, useEffect } from 'react'
import Categorydata from '../../Data/Categorydata'
import List_Category from '../../../CategoryscreenComponents/List_Category'
import { ScrollView } from 'native-base'

interface item {
  name: string,
  section: string
}
const Kids_Category: FC = () => {
  const [data1, setdata1] = useState<item[]>([])
  const [data2, setdata2] = useState<item[]>([])
  const [data3, setdata3] = useState<item[]>([])
  const setdatafilter = () => {
    setdata1([...Categorydata.filter(e => e.section == 'all')])
    setdata2([...Categorydata.filter(e => e.section == 'kids')])
    setdata3(data1.concat(data2))
  }
  useEffect(() => {
    setdatafilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor={'white'}>
      <List_Category data={data3} />
    </ScrollView>
  )
}

export default Kids_Category