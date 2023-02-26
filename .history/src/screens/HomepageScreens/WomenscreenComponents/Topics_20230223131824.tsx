import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text, } from 'native-base';

const Topics: FC = () => {
    return (
        <Box>
            <Center>
                <Text fontWeight='500' fontSize={25} py={30}>TOPICS</Text>
            </Center>
        </Box>
    )
}

export default Topics

const styles = StyleSheet.create({})