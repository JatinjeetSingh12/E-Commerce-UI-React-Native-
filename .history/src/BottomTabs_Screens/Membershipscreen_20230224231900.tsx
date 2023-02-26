import React, { FC } from 'react'
import { Box, HStack, ScrollView, Text, VStack } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'
import Coupon from '../../Components/Membershipcomponents/Coupon'
import Topbar_Notification from '../../Components/Notificationscreencomponents/Topbar_Notification'

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Topbar_Notification />
      <Scanner />
      <Coupon />
      
    </ScrollView>
  )
}

export default Membershipscreen

