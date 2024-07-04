"use client"
import CustomButom from '@/components/customButom/CustomButom';
import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Button, CircularProgress, CircularProgressLabel, Grid, Icon, Link, Show, Text } from '@chakra-ui/react'
import React from 'react'
import CountUp from 'react-countup';
import { FaDownload } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <PageBase >
      <Show above='md'>
       <HeadingText base='RESUME' text='ABOUT' colorText='ME' />
      </Show>


      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", xl: "row" }}
      >
        {/* Personal Information Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" my={5}>PERSONAL INFOS</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >First Name : &nbsp; </Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>Mohammad</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Address : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>Tunis</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Last Name : &nbsp; </Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>Milner</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Phone : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>+216 21 184 010</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Age : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>27 Years</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Email : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>demo@demo.com</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Nationality : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>Tunisian</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Skype : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>steve.milner</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Freelance : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>Available</Text>
            </Box>
            <Box className='flex flex-col md:flex-row'>
              <Text className='text-[15px]' >Languages : &nbsp;</Text>
              <Text as="span" className='ms-3 lg:ms-0 font-bold'>French, English</Text>
            </Box>
          </Grid>
          <Box my={5}>
            <CustomButom icon={<FaDownload size='20px' />} text='DOWNLOAD CV' />
          </Box>
        </Box>

        {/* Statistics Section */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box className='max-w-[100%]  rounded-lg border-[1px] border-[#66666694]' p={4} textAlign="center">
            <Text fontSize={{base: "4xl", md: "5xl"}} className='font-bold' color="customYellow.500"><CountUp end={12} duration={8} />+</Text>
            <Text mt={2}>YEARS OF EXPERIENCE</Text>
          </Box>
          <Box className='max-w-[100%]  rounded-lg border-[1px] border-[#66666694]' p={4} textAlign="center">
            <Text fontSize={{base: "4xl", md: "5xl"}} className='font-bold' color="customYellow.500"><CountUp end={97} duration={8} />+</Text>
            <Text mt={2}>COMPLETED PROJECTS</Text>
          </Box>
          <Box className='max-w-[100%]  rounded-lg border-[1px] border-[#66666694]' p={4} textAlign="center">
            <Text fontSize={{base: "4xl", md: "5xl"}} className='font-bold' color="customYellow.500"><CountUp end={81} duration={8} />+</Text>
            <Text mt={2}>HAPPY CUSTOMERS</Text>
          </Box>
          <Box className='max-w-[100%]  rounded-lg border-[1px] border-[#66666694]' p={4} textAlign="center">
            <Text fontSize={{base: "4xl", md: "5xl"}} className='font-bold' color="customYellow.500"><CountUp end={53} duration={8} />+</Text>
            <Text mt={2}>AWARDS WON</Text>
          </Box>
        </Grid>
      </Box>

    </PageBase>
  )
}
