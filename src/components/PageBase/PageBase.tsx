import { Box } from '@chakra-ui/react'

export function PageBase({ children }: { children: React.ReactNode }) {
  return (
    <Box className="mt-24 lg:mt-0 mx-2 md:mx-8 lg:mx-20 lg:pe-16 xl:pe-20">
        { children }
    </Box>
  )
}