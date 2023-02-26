import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack } from "native-base";
import Bottomtabnavigation from '../navigation/Bottomtabnavigation';


const Homepage: FC = () => {
    return (
        <>
            <Bottomtabnavigation />
        </>
    )
}

export default Homepage

const styles = StyleSheet.create({})