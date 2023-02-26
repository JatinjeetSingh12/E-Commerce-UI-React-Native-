import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import ImageComp from './ImageComp'
import images from '../../../Data/Images';


interface item {
  image: string,
  category: string
}


const Baby: FC = () => {
  const [image, setimage] = useState<item[]>([])

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "baby")])
  }

  useEffect(() => {
    setimagefilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageComp image={image} />
    </ScrollView>
  )
}

export default Baby

