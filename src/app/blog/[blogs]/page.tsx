import { PageBase } from '@/components/PageBase/PageBase';
import { blogFinder } from '../../../../blogData'
import { Box, Show, Text } from '@chakra-ui/react';
import HeadingText from '@/components/headingText/HeadingText';
import Image from 'next/image';

export default function BlogPage({ params }: { params: { blogs: string } }) {
    const { id: number, name, content, image, headingText, url, }: any = blogFinder(params.blogs);
    return (
        <PageBase>
            <Show above='md'>
                <HeadingText base='POSTS' text='MY' colorText='BLOG' />
            </Show>
            <Box className='w-[90%] md:w-[70%] lg:w-[60%] mx-auto pb-5'>
                <Box className='flex flex-col space-y-7  items-center w-full'>

                    <Text className='text-2xl md:text-3xl font-bold'>
                        {headingText}
                    </Text>
                    <Box className='relative w-[100%] h-[400px] rounded-md overflow-hidden'>
                        <Image
                            src={image}
                            alt={headingText}
                            objectFit="cover"
                            loading='lazy'
                            fill
                        />
                    </Box>
                    <Text className='text-[17px]'>
                        {content}
                    </Text>
                </Box>
            </Box>
        </PageBase>
    )
}
