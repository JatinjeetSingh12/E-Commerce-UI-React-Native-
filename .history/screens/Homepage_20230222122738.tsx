import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack } from "native-base";
import Topbar from '../components/Topbar';
import Categories from '../components/Categories';

const Homepage: FC = () => {
    return (
        <Box>
            <Topbar />
            <Categories />
        </Box>
    )
}

export default Homepage

const styles = StyleSheet.create({})