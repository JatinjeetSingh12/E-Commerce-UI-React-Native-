import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text } from 'native-base'

interface searchbyCategory {
    name: string,
    section: string
}

const SearchbyCategory: FC = () => {
    return (
        <Box>
            <Center >
                <Text fontWeight='500' fontSize={25} py={30}>SEARCH BY CATEGORY</Text>
            </Center>
            <Center>

            </Center>
        </Box>
    )
}

export default SearchbyCategory