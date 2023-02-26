import React,{FC} from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

const Other:FC = () => {
  return (
    <Box pl={2} my={2} py={4} backgroundColor={'white'} w={'100%'}>
    <Text pl={3} mb={10} fontSize={16}  fontWeight={'700'} >SETTINGS</Text>
    <VStack space={4}>

        <HStack space={4} >
        <MaterialCommunityIcons name="account-alert-outline" size={22} color="black" />
            <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                <Text fontSize={18}>PROFILE SETTINGS</Text>
            </Box>
        </HStack>

        <HStack space={4}>
        <Feather name="settings" size={22} color="black" />
            <Box>
                <Text fontSize={18}>SETTINGS</Text>
            </Box>
        </HStack>
        <HStack space={4} >
        <MaterialCommunityIcons name="account-alert-outline" size={22} color="black" />
            <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                <Text fontSize={18}>PROFILE SETTINGS</Text>
            </Box>
        </HStack>

        <HStack space={4}>
        <Feather name="settings" size={22} color="black" />
            <Box>
                <Text fontSize={18}>SETTINGS</Text>
            </Box>
        </HStack>
        <HStack space={4} >
        <MaterialCommunityIcons name="account-alert-outline" size={22} color="black" />
            <Box pb={2} borderBottomColor="silver" w={'100%'} borderBottomWidth={1}>
                <Text fontSize={18}>PROFILE SETTINGS</Text>
            </Box>
        </HStack>

        <HStack space={4}>
        <Feather name="settings" size={22} color="black" />
            <Box>
                <Text fontSize={18}>SETTINGS</Text>
            </Box>
        </HStack>

    </VStack>
</Box>
  )
}

export default Other