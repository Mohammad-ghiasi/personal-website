import { Box, Text } from "@chakra-ui/react";

interface propType{
    heading: string;
    content: string;
}

export function InfoText(props: propType) {
    const {content, heading} = props
    return (
        <Box className='flex flex-col md:flex-row'>
            <Text className='text-[15px]' >{heading} : &nbsp; </Text>
            <Text as="span" className='ms-3 lg:ms-0 font-bold'>{content}</Text>
        </Box>
    )
}