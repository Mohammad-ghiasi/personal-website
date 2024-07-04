import CustomButom from '@/components/customButom/CustomButom';
import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box,  Grid, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { FaDownload } from 'react-icons/fa';
import { InfoText } from './InfoText';
import InfoBox from './InfoBox';


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
            <InfoText heading='First Name' content='Mohammad' />
            <InfoText heading='Last Name' content='Ghiasi' />
            <InfoText heading='Address' content='Iran' />
            <InfoText heading='Phone' content='+98 918 701 2481' />
            <InfoText heading='Age' content='20 Years' />
            <InfoText heading='Email' content='demo@demo.com' />
            <InfoText heading='Nationality' content='Iranian' />
            <InfoText heading='Skype' content='steve.milner' />
            <InfoText heading='Freelance' content='Available' />
            <InfoText heading='Languages' content='English'/>
          </Grid>
          <Box my={5}>
            <CustomButom icon={<FaDownload size='20px' />} text='DOWNLOAD CV' />
          </Box>
        </Box>

        {/* Statistics Section */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <InfoBox countNumber={12} content='YEARS OF EXPERIENCE' />
          <InfoBox countNumber={97} content='COMPLETED PROJECTS' />
          <InfoBox countNumber={81} content='HAPPY CUSTOMERS' />
          <InfoBox countNumber={53} content='AWARDS WON' />
        </Grid>
      </Box>
    </PageBase>
  )
}