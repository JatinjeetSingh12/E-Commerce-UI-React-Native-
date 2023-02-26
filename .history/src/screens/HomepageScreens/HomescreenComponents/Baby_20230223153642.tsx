import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
type props = {
  baby: string
}

const Baby: FC<props> = ({ baby }) => {
  return (
    <View>
      <Text>Baby</Text>
    </View>
  )
}

export default Baby

const styles = StyleSheet.create({})