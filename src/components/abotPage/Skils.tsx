// components/CircularProgressItem.js
import { Box, Text } from "@chakra-ui/react";
const CircularProgressItem = ({ label, icon }: any) => (
  <Box textAlign="center" mb={8} >
    <Box className="flex justify-center">
      {icon}
    </Box>
    <Text mt='30px' fontSize="md" fontWeight="semibold">{label}</Text>
  </Box>
);

export default CircularProgressItem;
