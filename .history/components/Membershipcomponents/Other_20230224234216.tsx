import React, { FC } from 'react'
import { Box, HStack, Text, VStack } from 'native-base'

const Other: FC = () => {
    return (
        <Box pl={2} my={2} py={4} backgroundColor={'white'} w={'100%'}>
            <Text pl={3} mb={10} fontSize={16} fontWeight={'700'} >OTHER</Text>
            <VStack space={4}>

                <HStack  >
                    <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>GETTING STARTED</Text>
                    </Box>
                </HStack>

                <HStack space={4}>
                    <Box borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>FAQS</Text>
                    </Box>
                </HStack>
                <HStack space={4} >
                    <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>TERMS OF USE</Text>
                    </Box>
                </HStack>

                <HStack space={4}>
                    <Box borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>PRIVACY POLICY</Text>
                    </Box>
                </HStack>
                <HStack space={4} >
                    <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                        <Text fontSize={18}>VERSION 7.2.40</Text>
                    </Box>
                </HStack>

                <HStack space={4}>
                    <Box>
                        <Text fontSize={18}>OSS LICENCESS</Text>
                    </Box>
                </HStack>

            </VStack>
        </Box>
    )
}

export default Other