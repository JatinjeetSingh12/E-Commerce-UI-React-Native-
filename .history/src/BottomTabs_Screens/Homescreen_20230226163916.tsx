import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Input } from 'native-base';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import Topbar from '../../Components/HomescreenComponents/Topbar';
import HomeTabview from '../navigation/HomeTabview';

interface item {
  navigation:any
}
type props = {
  navigation:item[]
}

const Homescreen: FC<props> = ({navigation}) => {

  return (
    <Box height="100%">
      <Topbar navigation={navigation} />
      <HomeTabview />
    </Box>

  )
}

export default Homescreen

const styles = StyleSheet.create({})