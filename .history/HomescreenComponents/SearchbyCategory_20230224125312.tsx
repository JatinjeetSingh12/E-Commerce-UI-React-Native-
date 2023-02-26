import { TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text } from 'native-base'

interface searchbyCategory {
    name: string,
    section: string
}

type props = {
    data: searchbyCategory[]
}

const SearchbyCategory: FC<props> = ({ data }) => {
    return (
        <Box  pb={5}>
            <Center >
                <Text fontWeight='500' fontSize={25} py={30}>SEARCH BY CATEGORY</Text>
            </Center>
            <Center shadow={4} borderRadius={5} borderWidth={0} borderColor={'silver'} mx={2}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            style={{
                                paddingVertical: 10, marginVertical: 5,
                                borderBottomWidth: 0.2,
                                width: '95%', borderBottomColor: 'silver'
                            }}>
                            <Text fontSize={20}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}

            </Center>
        </Box>
    )
}

export default SearchbyCategory