"use client"
// pages/index.js
import { Box, Flex, Text, Button, VStack, HStack, Show, useColorMode, IconButton, keyframes } from "@chakra-ui/react";
import Image from "next/image";
import { FaHome, FaUser } from "react-icons/fa";
import { MdOutlineWork, MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMailOpenSharp } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";


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

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();



  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center" >
        <Flex height="100vh" alignItems="center" justifyContent="center" >
          <Show above="lg">
            <Box className="fixed w-[100vw] h-[100vh] bg-myYellow rotate-[70deg] z-[2] transform translate-x-[-800px]">
            </Box>
          </Show>
          <Box
            maxW='90%'
            display={{ md: "flex" }}
            className="z-10"
          >
            <Show above="lg">
              <Box className="rounded-[30px] h-[540px] overflow-hidden shadow-[10px_15px_20px_-10px_#2a2a2a9b]">
                <Image
                  src="/images/dark.jpg"
                  alt="Steve Milner"
                  loading="lazy"
                  width={450}
                  height={400}
                  className=" "
                />
              </Box>
            </Show>
            <VStack align="start" p={8} spacing={4} flex="1" ml={'100px'} pr={20} justifyContent={'center'}>
              <Text className="text-myYellow text-[50px] font-bold">
                I'M STEVE MILNER.
              </Text>
              <Text className="text-[50px] font-bold mt-[-30px]">
                WEB DESIGNER
              </Text>
              <Text lineHeight={'40px'} className="text-[16px] font-medium">
                I'm a Tunisian based web designer & front-end developer focused on
                crafting clean & user-friendly experiences, I am passionate about
                building excellent software that improves the lives of those around me.
              </Text>

              <Link href='/about'>
                <Box mt={5} className='inline-block cursor-pointer'>
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
            </VStack>
          </Box>
        </Flex>
      </Flex>


    </>
  );
}
