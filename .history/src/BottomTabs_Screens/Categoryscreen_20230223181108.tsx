import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box } from 'native-base'
import Topbar_Category from '../../CategoryscreenComponents/Topbar_Category'

const Categoryscreen: FC = () => {
  return (
    <Box height={'100%'}>
      <Topbar_Category />
    </Box>

  )
}

export default Categoryscreen

const styles = StyleSheet.create({})