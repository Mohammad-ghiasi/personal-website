"use client"
// pages/index.js
import { Box, Flex, Text, Button, VStack, HStack, Show, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center" >
        <Box className="fixed w-[100vw] h-[100vh] bg-myYellow rotate-[70deg] z-[2] transform translate-x-[-800px]">
        </Box>
        <Box
          maxW='90%'
          display={{ md: "flex" }}
          className="z-10"
        >

          <Show above="lg">
            <Box className="rounded-[30px] overflow-hidden shadow-[10px_15px_20px_-10px_#2a2a2a9b]">
              <Image
                src="/images/dark.jpg"
                alt="Steve Milner"
                loading="lazy"
                width={420}
                height={400}
                className="scale-110 "
              />
            </Box>
          </Show>


          <VStack align="start" p={8} spacing={4} flex="1" ml={40} pr={20}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
            <Text color="yellow.400" fontSize="2xl" fontWeight="bold">
              I'M STEVE MILNER.
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              WEB DESIGNER
            </Text>
            <Text>
              I'm a Tunisian based web designer & front-end developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those around me.
            </Text>
            <Button colorScheme="yellow" alignSelf="start">
              MORE ABOUT ME
            </Button>
          </VStack>
          <VStack
            spacing={4}
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
          >
            <Button colorScheme="yellow" borderRadius="full" />
            <Button colorScheme="gray" borderRadius="full" />
            <Button colorScheme="gray" borderRadius="full" />
            <Button colorScheme="gray" borderRadius="full" />
          </VStack>
        </Box>
      </Flex>


    </>
  );
}
