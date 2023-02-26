import { StyleSheet, View, FlatList } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text, Image, HStack, VStack } from 'native-base';
import Topicsdata from '../../../Data/Topics';

const Topics: FC = () => {
    return (
        <Box>
            <Center>
                <Text fontWeight='500' fontSize={25} py={30}>TOPICS</Text>
            </Center>
            <Box px={2} my={2}>
                {Topicsdata.map((item, index) => {
                    return (
                        <Box width={'100%'}  py={2} flexDirection={'row'} key={index}>
                            <Image size={'md'} source={{ uri: item.img }} alt='alternative text' />
                            <VStack w={'80%'} px={2}>
                                <Text fontWeight={'extrabold'} fontSize={15}>{item.title}</Text>
                                <Text fontSize={13} fontWeight={'light'}>{item.desc}</Text>
                            </VStack>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Topics

const styles = StyleSheet.create({})