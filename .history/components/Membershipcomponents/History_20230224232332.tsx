import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack,  Text, VStack } from 'native-base'


const History: FC = () => {
    return (
        <Box my={4} py={4} backgroundColor={'white'} w={'100%'}>
        <VStack space={4}>

          <HStack space={4} >
            <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
            <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
              <Text fontSize={18}>COUPON</Text>
            </Box>
          </HStack>

          <HStack space={4}>
            <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" />
            <Box>
              <Text fontSize={18}>STORE SERVICE SURVEY</Text>
            </Box>
          </HStack>

        </VStack>
      </Box>
    )
}

export default History