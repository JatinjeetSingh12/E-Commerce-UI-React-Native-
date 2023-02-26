import React, { FC, useState, useEffect } from 'react'
import Categorydata from '../../Data/Categorydata'
import List_Category from '../../../CategoryscreenComponents/List_Category'
import { ScrollView } from 'native-base'

interface item {
  name: string,
  section: string
}
const Kids_Category: FC = () => {
  const [data, setdata] = useState<item[]>([])

  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'all')])
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

export default Kids_Category