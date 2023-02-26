import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { Box } from 'native-base'
import NotificationTabview from '../navigation/NotificationTabview'
import Topbar_Notification from '../../Components/Notificationscreencomponents/Topbar_Notification'

const Notificationscreen:FC = () => {
  return (
    <Box>
      <Topbar_Notification />
      
    </Box>
  )
}

export default Notificationscreen

const styles = StyleSheet.create({})