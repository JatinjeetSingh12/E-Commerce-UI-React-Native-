import React, { FC } from 'react'
import { Box, HStack, ScrollView, Text, VStack } from 'native-base'
import Scanner from '../../Components/Membershipcomponents/Scanner'
import Coupon from '../../Components/Membershipcomponents/Coupon'
import Topbar_Notification from '../../Components/Notificationscreencomponents/Topbar_Notification'
import History from '../../Components/Membershipcomponents/History'

const Membershipscreen: FC = () => {
  return (
    <ScrollView>
      <Topbar_Notification />
      <Scanner />
      <Coupon />
      <History />
    </ScrollView>
  )
}

export default Membershipscreen

