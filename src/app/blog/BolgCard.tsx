import { Box, Card, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
    url: string;
    image: string;
    headingText: string;
    content: string;
  }

export default function BolgCard({ url, image, headingText, content }: BlogCardProps) {
  return (
    <Link href={url}>
    <Card
      maxW="sm"
      // borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx='auto'
    >
      <Box className='relative w-[100%] h-[220px] overflow-hidden'>
        <Image
          src={image}
          alt={headingText}
          objectFit="cover"
          loading='lazy'
          fill
          className='transition  hover:scale-125 hover:rotate-3 '
        />
      </Box>
      <Box className='w-[100%] h-[5px] bg-myYellow' />

      <Box p="6">
        <Stack direction="row" align="center" justify="space-between">
          <Text className='text-xl font-bold transition hover:scale-105 hover:text-myYellow'>{headingText}</Text>
        </Stack>

        <Text
          mt="2"
          css={{
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >{content}</Text>
      </Box>

    </Card>
  </Link>
  )
}