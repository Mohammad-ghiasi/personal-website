import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface proptype{
    base: string,
    text: string,
    colorText: string,
}

export default function HeadingText(props: proptype) {
    const {base, text, colorText} = props
    return (
        <Box
            position="relative"
            width="100%"
            height="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            className=' mt-0 lg:mt-14 mb-20'
        >
            <Text
                position="absolute"
                fontWeight="bold"
                color="rgba(174, 174, 174, 0.139)"
                zIndex="1"
                className='text-[90px] xl:text-[100px]'
            >
                {base}
            </Text>
            <Text
                fontWeight="bold"
                zIndex="2"
                className='text-[45px] xl:text-[50px] font-extrabold'
            >
                {text} <Text as="span" className='ms-3 lg:ms-0' color="customYellow.500">{colorText}</Text>
            </Text>
        </Box>
    )
}
