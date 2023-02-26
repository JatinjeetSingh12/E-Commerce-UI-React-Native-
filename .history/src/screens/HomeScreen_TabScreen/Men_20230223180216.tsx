import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import { ScrollView, } from 'native-base'
import Topics from '../../../HomescreenComponents/Topics';
import images from '../../Data/Images';
import ImageComp from '../../../HomescreenComponents/ImageComp';



interface item {
  image: string,
  category: string
}



const Men: FC = () => {

  const [image, setimage] = useState<item[]>([])

  const setimagefilter = () => {
    setimage([...images.filter(e => e.category == "men")])
  }

  useEffect(() => {
    setimagefilter();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageComp image={image} />
      <Topics />

    </ScrollView>
  )
}

export default Men