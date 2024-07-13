import CustomButom from '@/components/customButom/CustomButom';
import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Divider, Grid, Show, Text } from '@chakra-ui/react'
import { FaDownload, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaWordpressSimple, FaSass, FaYarn } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiRedux, SiMui, SiChakraui, SiReactquery, SiPwa } from "react-icons/si";
import { InfoText } from '../../components/abotPage/InfoText';
import { TbMobiledata } from "react-icons/tb";
import InfoBox from '../../components/abotPage/InfoBox';
import Timeline from '../../components/abotPage/Expeianse';
import CircularProgressItem from '../../components/abotPage/Skils';
import Image from 'next/image';
import Link from 'next/link';


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
            <Link href='resume/mohammad-ghiasi_Resume.docx' download>
              <CustomButom icon={<FaDownload size='20px' />} text='DOWNLOAD CV' />
            </Link>
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
        <Box className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <CircularProgressItem label="HTML" icon={<FaHtml5 size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="CSS" icon={<FaCss3Alt size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="JAVASCRIPT" icon={<IoLogoJavascript size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="TYPESCRIPT" icon={<SiTypescript size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="REACT" icon={<FaReact size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="NEXT" icon={<SiNextdotjs size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="REDUX" icon={<SiRedux size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="MATERIAL-UI" icon={<SiMui size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="CHAKRA-UI" icon={<SiChakraui size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="REST API" icon={<TbMobiledata size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="GIT" icon={<FaGithub size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="WORDPRESS" icon={<FaWordpressSimple size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="REACTQUERY" icon={<SiReactquery size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="SASS" icon={<FaSass size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="PWA" icon={<SiPwa size='73px' className="text-[#ffb400]" />} />
          <CircularProgressItem label="YARN" icon={<FaYarn size='73px' className="text-[#ffb400]" />} />
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