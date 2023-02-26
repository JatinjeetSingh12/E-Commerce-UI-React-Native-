import { View } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text } from 'native-base'

interface searchbyCategory {
    name: string,
    section: string
}

type props = {
    data:searchbyCategory[]
}

const SearchbyCategory: FC<props> = ({data}) => {
    return (
        <Box>
            <Center >
                <Text fontWeight='500' fontSize={25} py={30}>SEARCH BY CATEGORY</Text>
            </Center>
            <Center px={2}>
                {data.map((item,index)=>{
                    return(
                        <Box key={index} borderBottomWidth={0.2} pb={2} my={3}>
                            <Text>{item.name}</Text>
                        </Box>
                    )
                })}

            </Center>
        </Box>
    )
}

export default SearchbyCategory