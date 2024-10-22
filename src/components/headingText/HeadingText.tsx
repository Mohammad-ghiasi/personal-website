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
                color="rgba(174, 174, 174, 0.206)"
                zIndex="1"
                className='text-[90px] xl:text-[90px] font-extrabold'
            >
                {base}
            </Text>
            <Box
                fontWeight="bold"
                zIndex="2"
                className='flex flex-row space-x-4 text-[45px] xl:text-[50px] '
            >
                <Text className='font-extrabold'>{text}</Text> <Text as="span" className='ms-3 lg:ms-0 font-extrabold' color="customYellow.500">{colorText}</Text>
            </Box>
        </Box>
    )
}
