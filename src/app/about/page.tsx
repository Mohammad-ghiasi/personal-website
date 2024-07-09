import CustomButom from '@/components/customButom/CustomButom';
import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Divider, Grid, Show, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaDownload } from 'react-icons/fa';
import { InfoText } from './InfoText';
import InfoBox from './InfoBox';
import Timeline from './Expeianse';
import CircularProgressItem from './Skils';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <PageBase >
      <Show above='md'>
        <HeadingText base='RESUME' text='ABOUT' colorText='ME' />
      </Show>
      <Box className="block md:hidden mt-20">
        <Box className='flex justify-center items-center h-[100%] w-[100%]'>
          <Box className=" relative w-[240px] h-[250px] rounded-full overflow-hidden mb-5  border-[#252525] border-4  ">
            <Image
              src="/images/dark.jpg"
              alt="Steve Milner"
              loading="lazy"
              fill
              objectFit="cover"  // Ensures the image covers the entire container
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", xl: "row" }}
      >
        {/* Personal Information Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" my={5}>PERSONAL INFOS</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <InfoText heading='First Name' content='Mohammad' />
            <InfoText heading='Last Name' content='Ghiasi' />
            <InfoText heading='Address' content='Iran' />
            <InfoText heading='Phone' content='+98 918 701 2481' />
            <InfoText heading='Age' content='20 Years' />
            <InfoText heading='Email' content='demo@demo.com' />
            <InfoText heading='Nationality' content='Iranian' />
            <InfoText heading='Skype' content='steve.milner' />
            <InfoText heading='Freelance' content='Available' />
            <InfoText heading='Languages' content='English' />
          </Grid>
          <Box my={5}>
            <CustomButom icon={<FaDownload size='20px' />} text='DOWNLOAD CV' />
          </Box>
        </Box>

        {/* Statistics Section */}
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <InfoBox countNumber={12} content='YEARS OF EXPERIENCE' />
          <InfoBox countNumber={97} content='COMPLETED PROJECTS' />
          <InfoBox countNumber={81} content='HAPPY CUSTOMERS' />
          <InfoBox countNumber={53} content='AWARDS WON' />
        </Grid>
      </Box>
      <Box className=''>
        <Box display="flex" justifyContent="center" className='my-20'>
          <Divider orientation="horizontal" width="50%" bg='#9d9d9d63' style={{ height: '1px' }} />
        </Box>
        <Box className='grid grid-cols-2 md:grid-cols-4 '>
          <CircularProgressItem label="HTML" value={90} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="CSS" value={85} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="JAVASCRIPT" value={75} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="TYPESCRIPT" value={70} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="REACT" value={80} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="NEXT" value={75} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="REDUX" value={95} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="MATERIAL-UI" value={80} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="CHAKRA-UI" value={100} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="REST API" value={90} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="GIT" value={80} color="customYellow.500" trackColor="gray.300" />
          <CircularProgressItem label="WORDPRESS" value={60} color="customYellow.500" trackColor="gray.300" />
          {/* Add more skills as needed */}
        </Box>
        <Box display="flex" justifyContent="center" className='my-20'>
          <Divider orientation="horizontal" width="50%" bg='#9d9d9d63' style={{ height: '1px' }} />
        </Box>
      </Box>
      <Box mt={5}>
        <Timeline />
      </Box>
    </PageBase>
  )
}