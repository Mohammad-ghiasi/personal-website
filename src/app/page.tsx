import { Box, Flex, Text, VStack, Show, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Image from "next/image";
import Tringle from "@/components/tringle/Tringle";
import CustomButom from "@/components/customButom/CustomButom";
import { motion } from "framer-motion"
import DivMotion from "@/motions/Xmotion";
import { TiArrowRightThick } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <Flex className="mt-0 md:mt-44 lg:mt-0 " height="100vh" alignItems="center" justifyContent="center"  >
        <Flex height="100vh" alignItems="center" justifyContent="center" >
          <Show above="lg">
            <Tringle />
          </Show>
          <Box
            maxW={{ base: '100%', md: '90%' }}
            display={{ md: "flex" }}
            className="z-10"
          >
            <Show above="lg">
              <DivMotion
                initial={{ y: '100vh' }}
                animate={{ y: '0' }}
                transition={{ duration: 1 }}

                className="rounded-[30px] h-[470px] xl:h-[540px] overflow-hidden shadow-[10px_15px_20px_-10px_#2a2a2a9b]">
                <Box className="relative w-[350px]  lg:w-[400px] xl:w-[430px] h-[470px] xl:h-[540px]">
                  <Image
                    src="/images/dark.jpg"
                    alt="Steve Milner"
                    loading="lazy"
                    fill
                    className=" "
                  />
                </Box>
              </ DivMotion>
            </Show>
            <VStack className="flex justify-center lg:p-8 mx-5 lg:mx-[50px] xl:ml-[100px]  md:mr-[30px] xl:mr-[70px]  " alignItems={{ base: "start", md: "center", lg: "start" }} spacing={4} flex="1"  >
              <Box className="hidden md:block lg:hidden bg-[#252525]  rounded-full overflow-hidden mb-5 h-[240px]  border-[#252525] border-4 mt-20">
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
              <DivMotion
                initial={{ y: '-100vh' }}
                animate={{ y: '0' }}
                transition={{
                  duration: 1.1,
                  type: "spring",
                  stiffness: 110,  // سختی فنر
                  damping: 10,      // مقاومت در برابر حرکت
                }}
              >
                <Text className="text-myYellow text-[26px] md:text-[35px] lg:text-[40px] xl:text-[50px]  font-bold text-start md:text-center lg:text-start">
                  I&apos;M STEVE MILNER.
                </Text>
                <Text className="text-[26px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-bold mt-[-10px] md:mt-[-20px] lg:mt-[-30px] text-start md:text-center lg:text-start">
                  WEB DESIGNER
                </Text>
              </DivMotion>
              <DivMotion
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={.6}
              >
                <Text lineHeight={'40px'} className="text-[15px] md:text-[16px] font-medium sm:text-start  md:text-center lg:text-start ">
                  I&apos;m a Tunisian based web designer & front-end developer focused on
                  crafting clean & user-friendly experiences, I am passionate about
                  building excellent software that improves the lives of those around me.
                </Text>
              </DivMotion>
              <DivMotion
                initial={{ y: '100vh' }}
                animate={{ y: '0' }}
                transition={{
                  duration: 1.1,
                  type: "spring",
                  stiffness: 110,  // سختی فنر
                  damping: 10,      // مقاومت در برابر حرکت
                }}

              >
                <CustomButom icon={<TiArrowRightThick size='27px' />} text="MORE ABOUT ME"  />
              </DivMotion>
            </VStack>
            
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
