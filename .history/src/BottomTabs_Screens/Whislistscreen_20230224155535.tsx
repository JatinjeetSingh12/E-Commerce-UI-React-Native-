import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Topbar_whislist from '../../Components/WIshListscreenComponents/Topbar_whislist'
import Items_wishlist from '../../Components/WIshListscreenComponents/items_wishlist'

const Whislistscreen: FC = () => {
  return (
    <View>
      <Topbar_whislist />
      <Items_wishlist />
    </View>
  )
}
 
export default Whislistscreen

const styles = StyleSheet.create({})