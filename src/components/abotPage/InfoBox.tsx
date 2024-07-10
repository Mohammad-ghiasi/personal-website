"use client"
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CountUp from 'react-countup';

interface propType{
    countNumber: number;
    content: string;
}

export default function InfoBox(props: propType) {
    const {countNumber, content} = props
    return (
        <Box className='max-w-[100%]  rounded-lg border-[1px] border-[#66666694]' p={4} textAlign="center">
            <Text fontSize={{ base: "4xl", md: "5xl" }} className='font-bold' color="customYellow.500"><CountUp end={countNumber} duration={8} />+</Text>
            <Text mt={2}>{content}</Text>
        </Box>
    )
}
