import { View } from 'react-native'
import React, { FC } from 'react'
import { Center, Text,Image } from 'native-base'

const Items_wishlist: FC = () => {
  return (
    <Center justifyContent={'center'}>
      <Image alt='alternative text' size={'lg'}  source={{uri:'https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png'}}/>
      <Text>THERE ARE 0 ITEMS IN WHISH LIST.</Text>
      <Text>Add items to wish list and check price and inventory information</Text>
    </Center>
  )
}

export default Items_wishlist