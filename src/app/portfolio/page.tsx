import HeadingText from "@/components/headingText/HeadingText";
import { PageBase } from "@/components/PageBase/PageBase";
import { Box, Show, Text } from "@chakra-ui/react";

import Projects from "../../components/portfolio/Projects";


export default function PortfolioPage() {

  return (
    <PageBase>
      <Show above='md'>
        <HeadingText base='WORKS' text='MY' colorText='PORTFOLIO' />
      </Show>

      <Box className="block md:hidden">
        <Text className="text-2xl font-bold pt-5 my-10">MY <span className="text-myYellow">PORTFOLIO</span></Text>
      </Box>

      <Projects />

    </PageBase>
  )
}
