"use client"
import { Box, Text, keyframes } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { TiArrowRightThick } from 'react-icons/ti'

const pulseRing = keyframes`
  0% {
    
    box-shadow: 0 0 0 0 rgba(255, 223, 0, 0.7);
  }
  70% {
    
    box-shadow: 0 0 0 10px rgba(255, 223, 0, 0);
  }
  100% {
    
    box-shadow: 0 0 0 0 rgba(255, 223, 0, 0);
  }
`;

export default function CustomButom() {
  return (
    <Link href='/about'>
    <Box mt={5} mb={{base: '0', md: '20px', lg: '0'}} className='inline-block cursor-pointer '>
      <Box className='flex flex-row items-center border border-myYellow h-[55px] rounded-full relative overflow-hidden transition ' _hover={{
        animation: `${pulseRing} 1.5s infinite`,
        _before: {
          transform: "translateX(0)",
        },
      }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffb400",
          transition: "transform 0.6s ease",
          transform: "translateX(100%)",
          zIndex: -1,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffb400",
          transition: "opacity 0.6s ease",
          opacity: 0,
          zIndex: -1,
        }}
      >
        <Text className='ps-[34px] pe-[20px]'>More About Me</Text>
        <Box className='flex justify-center items-center bg-myYellow h-[100%] rounded-full w-[54px]'>
          <TiArrowRightThick size='27px' />
        </Box>
      </Box>
    </Box>
  </Link>
  )
}
