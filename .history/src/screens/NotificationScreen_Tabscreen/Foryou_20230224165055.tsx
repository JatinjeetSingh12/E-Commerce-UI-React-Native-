import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Center } from 'native-base'
const Foryou: FC = () => {
    return (
        <Center>
            <Center height={'100%'} width={{
      base: 200,
      lg: 250
    }}>
                <Text>You do not have any notifications</Text>
            </Center>
        </Center>
    )
}

export default Foryou