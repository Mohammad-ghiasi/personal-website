import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';
import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";

export default function ContactPage() {
  return (
    <Box m={10}>
       <Flex minHeight="100vh" align="center" justify="center" bg="black" color="white" p={5}>
      <Box
        bg="gray.800"
        p={8}
        rounded="md"
        w={{ base: '100%', md: '500px' }}
        boxShadow="lg"
      >
        <Text fontSize="2xl" mb={4} fontWeight="bold">DON&apos;T BE SHY!</Text>
        <Text mb={6}>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </Text>
        <form>
          <FormControl id="name" mb={4}>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" bg="gray.700" border="none" focusBorderColor="yellow.400" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Your Email</FormLabel>
            <Input type="email" bg="gray.700" border="none" focusBorderColor="yellow.400" />
          </FormControl>
          <FormControl id="subject" mb={4}>
            <FormLabel>Your Subject</FormLabel>
            <Input type="text" bg="gray.700" border="none" focusBorderColor="yellow.400" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Your Message</FormLabel>
            <Textarea bg="gray.700" border="none" focusBorderColor="yellow.400" />
          </FormControl>
          <Button type="submit" colorScheme="yellow" w="full">
            Send Message
          </Button>
        </form>
        <Box mt={8}>
          <Text mb={2}>Mail me</Text>
          <Text fontWeight="bold">steve@mail.com</Text>
          <Text mt={4} mb={2}>Call me</Text>
          <Text fontWeight="bold">+216 21 184 010</Text>
        </Box>
      </Box>
    </Flex>
      
    </Box>
  )
}
