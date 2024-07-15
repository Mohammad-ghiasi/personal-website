import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Show } from '@chakra-ui/react'
import { blogData, blogtype } from '../../../blogData';
import BolgCard from './BolgCard';


export default function BlogPage() {
  return (
    <PageBase>
      <Show above='md'>
        <HeadingText base='POSTS' text='MY' colorText='BLOG' />
      </Show>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-5">
        {blogData.map((item: blogtype) =>
          <BolgCard key={item.id} content={item.content} headingText={item.headingText} image={item.image} url={item.url} />
        )}
      </Box>
    </PageBase>
  )
}