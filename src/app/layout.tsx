import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/ChakraProvider";
import { Box, Flex, Show } from "@chakra-ui/react";
import Vnav from "@/components/Vnav/Vnav";
import Hnav from "@/components/Hnav/Hnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex height="100vh"  >
            {/* hrizenatl Nav */}
            <Box className="lg:hidden ">
              <Hnav />
            </Box>
            {/* body */}
            <Box>
              {children}
            </Box>
            {/* vertical nav */}
            <Show above="lg">
              <Vnav />
            </Show>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
