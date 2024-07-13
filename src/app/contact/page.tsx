import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Flex, FormControl, Input, Show, Text, Textarea, Tooltip } from '@chakra-ui/react';
import { IoMdMailOpen } from "react-icons/io";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
import CustomButom from '@/components/customButom/CustomButom';
import { IoIosSend, IoMdCall } from "react-icons/io";

export default function ContactPage() {
  return (
    <PageBase>
      <Show above='md'>
        <HeadingText base='CONTACT' text='GET IN' colorText='TOUCH' />
      </Show>
      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <Box flex='6' className=' w-[100%]'>
          <Box className='flex flex-col space-y-6 w-[100%]'>
            <Text className='text-3xl font-bold'>DON&apos;T BE SHY !</Text>
            <Text >
              Feel free to get in touch with me.
              I am always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.
            </Text>
            <Box>
              <Box className='flex flex-row items-center'>
                <IoMdMailOpen size='35px' className="text-[#ffb400]" />
                <Box className='flex flex-col space-y-[-5px] ps-3'>
                  <Text className='font-light text-[15px]'>MAIL ME</Text>
                  <Text className='font-bold text-[14px] lg:text-[15px] '>mohammadghiasi005@gmail.com</Text>
                </Box>
              </Box>
              <Box className='flex flex-row items-center mt-4'>
                <IoMdCall  size='35px' className="text-[#ffb400]" />
                <Box className='flex flex-col space-y-[-5px] ps-3'>
                  <Text className='font-light text-[15px]'>CALL ME</Text>
                  <Text className='font-bold text-[16px] '>+98 918 701 2481</Text>
                </Box>
              </Box>
            </Box>
            <Box className='flex flex-row space-x-5 '>
              <Tooltip hasArrow label='Github' bg='gray.500'>
                <Link href='https://github.com/Mohammad-ghiasi'>
                  <FaGithub size='22px' className="transi cursor-pointer hover:text-[#ffb400]" />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label='Linkedin' bg='gray.500'>
                <Link href='https://www.linkedin.com/in/mohammad-ghiasi-2383432bb/'>
                  <FaLinkedin size='22px' className="transi cursor-pointer hover:text-[#ffb400]" />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label='Gmail' bg='gray.400'>
                <Link href='/contact'>
                  <SiGmail size='22px' className="transi cursor-pointer hover:text-[#ffb400]" />
                </Link>
              </Tooltip>
            </Box>
          </Box>
        </Box>
        <Box flex='14' className=' h-[300px] w-[100%]'>
          <Box className='ms-3 mt-20 lg:mt-0'>
            <form>
              <Box className='flex flex-col space-y-5 md:flex-row md:space-x-10 md:space-y-0'>
                <FormControl>
                  <Input type="text" placeholder="YOURE NAME" size='md' focusBorderColor="customYellow.500" />
                </FormControl>
                <FormControl>
                  <Input type="text" placeholder="YOURE SUBJECT" size='md' focusBorderColor="customYellow.500" />
                </FormControl>
              </Box>
              <Box className='flex flex-col'>
                <FormControl>
                  <Input type="email" placeholder="YOURE EMAIL" size='md' className='my-5' focusBorderColor="customYellow.500" />
                </FormControl>
                <FormControl>
                  <Textarea placeholder="YOURE MESSAGE" size='md' h="100px" focusBorderColor="customYellow.500" />
                </FormControl>
              </Box>
              <Box >
                <CustomButom icon={<IoIosSend size='27px' />} text='SENS MESSAGE' />
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </PageBase>
  )
}
