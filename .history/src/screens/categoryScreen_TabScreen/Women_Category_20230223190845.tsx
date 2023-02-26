import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import Categorydata from '../../Data/Categorydata'

interface item {
  name: string,
  section: string
}
const Women_Category: FC = () => {
  const [data, setdata] = useState<item[]>([])
  const setdatafilter = () => {
    setdata([...Categorydata.filter(e => e.section == 'all')])
    setdata([...Categorydata.filter(e => e.section == 'women')])
  }
  useEffect(() => {
    setdatafilter();
  }, [])

  return (
    <View>

    </View>
  )
}

export default Women_Category