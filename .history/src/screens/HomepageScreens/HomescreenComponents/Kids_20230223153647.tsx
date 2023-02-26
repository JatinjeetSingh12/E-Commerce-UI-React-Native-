import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

type props = {
  kids: string
}


const Kids: FC<props> = ({ kids }) => {
  return (
    <View>
      <Text>Kids</Text>
    </View>
  )
}

export default Kids

