import { Flex, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Hnav() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            backdropFilter="blur(10px)"  // Apply backdrop filter for blur effect
            bg="#8282823e"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="9999"
            justifyContent='space-between' flexDirection='row'
        >
            <Text className="text-myYellow" fontSize="2xl" fontWeight="bold">M.GH</Text>
            <Spacer />
            <Link href="#" color="white">Home</Link>

        </Flex>
    )
}
