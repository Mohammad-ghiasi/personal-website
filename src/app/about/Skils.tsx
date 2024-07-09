// components/CircularProgressItem.js
import { Box, CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react";

const CircularProgressItem = ({ label, value, color,trackColor }: any) => (
  <Box textAlign="center" mb={8}>
    <CircularProgress value={value} color={color} size="120px" thickness="7px"  trackColor={trackColor} >
      <CircularProgressLabel fontSize='25px'>{value}%</CircularProgressLabel>
    </CircularProgress>
    <Text mt='30px' fontSize="md" fontWeight="semibold">{label}</Text>
  </Box>
);

export default CircularProgressItem;
