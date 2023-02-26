import { View } from 'react-native'
import React, { FC } from 'react'
import { Center, Text, Image, VStack} from 'native-base'

const Items_wishlist: FC = () => {
  return (
    <VStack space={4} alignItems={'center'} my={120}>
      <Image alt='alternative text' width={'250'} height={'250'} source={{ uri: 'https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png' }} />
      <Text fontWeight={'500'}>THERE ARE 0 ITEMS IN WHISH LIST.</Text>
      <Text fontSize={'14'} alignSelf={'center'}>Add items to wish list and check price and inventory information</Text>
    </VStack>
  )
}

export default Items_wishlist