import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { Box } from 'native-base'
import NotificationTabview from '../navigation/NotificationTabview'

const Notificationscreen:FC = () => {
  return (
    <Box>
      <NotificationTabview />
    </Box>
  )
}

export default Notificationscreen

const styles = StyleSheet.create({})