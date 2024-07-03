"use client"
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaHome, FaUser } from 'react-icons/fa';
import { MdLightMode, MdOutlineWork, MdDarkMode } from 'react-icons/md';
import { IoMailOpenSharp } from 'react-icons/io5';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import CustomIconButton from './Links';
import DivMotion from '@/motions/Xmotion';


const Vnav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (

        <VStack
            spacing={'20px'}
            pr={5}
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
        >

                <CustomIconButton href="/" icon={<FaHome size="23px" />} ariaLabel="home" />
                <CustomIconButton href="/about" icon={<FaUser size="23px" />} ariaLabel="about" />
                <CustomIconButton href="/portfolio" icon={<MdOutlineWork size="23px" />} ariaLabel="portfolio" />
                <CustomIconButton href="/contact" icon={<IoMailOpenSharp size="23px" />} ariaLabel="contact" />
                <CustomIconButton href="/blog" icon={<TbMessageCircle2Filled size="23px" />} ariaLabel="blog" />
                <IconButton _hover={{ bg: 'customYellow.500', color: 'white' }} onClick={(): void => toggleColorMode()} aria-label='home' size='lg' borderRadius="full" icon={colorMode === 'light' ? <MdLightMode size='23px' /> : <MdDarkMode size='23px' />} />
        </VStack>
    );
};

export default Vnav;
