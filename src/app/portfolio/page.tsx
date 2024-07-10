import HeadingText from "@/components/headingText/HeadingText";
import { PageBase } from "@/components/PageBase/PageBase";
import { Box, Show, Text } from "@chakra-ui/react";
import HoverText from "./HoverText";

export default function PortfolioPage() {
  return (
    <PageBase>
      <Show above='md'>
        <HeadingText base='WORKS' text='MY' colorText='PORTFOLIO' />
      </Show>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>
        <Box className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group">
          <HoverText text="Hover Text" />
        </Box>


      </Box>
    </PageBase>
  )
}
