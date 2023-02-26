import React, { FC } from 'react'
import { Box, Text,Image, Center } from 'native-base'

const Scanner:FC = () => {
    return (
        <Box>
        <Center  my={3} mx={5} backgroundColor='white' height={'40'} borderRadius={6} >

            <Image alt='alternative text' h={100} width={'90%'} source={{uri:'https://cdn-dfhjh.nitrocdn.com/BzQnABYFnLkAUVnIDRwDtFjmHEaLtdtL/assets/static/optimized/rev-dd281fc/wp-content/uploads/2015/02/barcode-13.png'}} />
        </Center>
        </Box>
    )
}

export default Scanner