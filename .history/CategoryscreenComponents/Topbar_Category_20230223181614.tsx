import { View, Text, TextInput} from 'react-native'
import React, { FC } from 'react'
import {  Box, HStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons';


const Topbar_Category: FC = () => {
    return (
        <Box   w={'100%'}>
            <HStack my={10} borderWidth={1} height={10} alignItems={'center'} borderRadius={5}>
                <AntDesign name="search1" size={24} color="rgba(0, 0, 0, 0.3)" />
                <TextInput placeholderTextColor='rgba(0, 0, 0, 0.3)' placeholder='Search for Keyword' style={{ height: 40, width: '88%' }} />
            </HStack>
        </Box>
    )
}

export default Topbar_Category