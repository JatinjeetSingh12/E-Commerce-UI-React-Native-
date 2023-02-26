import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack } from "native-base";
import { Entypo, MaterialCommunityIcons  } from '@expo/vector-icons'; 

const Homepage: FC = () => {
    return (
        <Box>
            <HStack px={4} pt={10} space={1} justifyContent="flex-end">
            <MaterialCommunityIcons name="basket" size={24} color="black" />
            <Entypo name="menu" size={24} color="black" />
            </HStack>
        </Box>
    )
}

export default Homepage

const styles = StyleSheet.create({})