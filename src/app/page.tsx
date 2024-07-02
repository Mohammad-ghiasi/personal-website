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
      <Flex className="mt-0 md:mt-20 lg:mt-0" height="100vh" alignItems="center" justifyContent="center"  >
        <Flex height="100vh" alignItems="center" justifyContent="center" >
          <Show above="lg">
            <Box className="fixed w-[100vw] h-[100vh] bg-myYellow rotate-[70deg] z-[2] transform translate-x-[-800px]">
            </Box>
          </Show>
          <Box
            maxW={{ base: '100%', md: '90%' }}
            display={{ md: "flex" }}
            className="z-10"
          >
            <Show above="lg">
              <Box className="rounded-[30px] h-[470px] xl:h-[540px] overflow-hidden shadow-[10px_15px_20px_-10px_#2a2a2a9b]">
                <Box className="relative w-[350px]  lg:w-[400px] xl:w-[430px] h-[470px] xl:h-[540px]">
                  <Image
                    src="/images/dark.jpg"
                    alt="Steve Milner"
                    loading="lazy"
                    fill
                    className=" "
                  />
                </Box>
              </Box>
            </Show>



            <VStack className="flex justify-center lg:p-8 mx-5 lg:mx-[50px] xl:ml-[100px]  md:mr-[30px] xl:mr-[70px]  " alignItems={{ base: "start", md: "center", lg: "start" }} spacing={4} flex="1"  >
              <Box className="hidden md:block lg:hidden  rounded-full overflow-hidden mb-5 h-[240px]  border-[#252525] border-4">
                <Box className="relative w-[240px] h-[280px]  ">
                  <Image
                    src="/images/dark.jpg"
                    alt="Steve Milner"
                    loading="lazy"
                    fill
                    objectFit="cover"  // Ensures the image covers the entire container
                    className="rounded-full"
                  />
                </Box>
              </Box>
              <Text className="text-myYellow text-[26px] md:text-[35px] lg:text-[40px] xl:text-[50px]  font-bold">
                I'M STEVE MILNER.
              </Text>
              <Text className="text-[26px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-bold mt-[-30px]">
                WEB DESIGNER
              </Text>
              <Text lineHeight={'40px'} className="text-[15px] md:text-[16px] font-medium sm:text-start  md:text-center lg:text-start ">
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
