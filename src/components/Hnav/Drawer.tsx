"use client"

import {
    Text,
    Link,
    IconButton,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

    useDisclosure,
    VStack,
    Drawer,
    Divider,
    useColorMode,
} from '@chakra-ui/react';

import { IoMdMenu } from "react-icons/io";
import { FaHome, FaUser } from 'react-icons/fa';
import { MdDarkMode, MdLightMode, MdOutlineWork } from 'react-icons/md';
import { IoMailOpenSharp } from 'react-icons/io5';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

export default function Drawers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <IconButton
                icon={<IoMdMenu size='25px' />}
                variant="outline"

                onClick={onOpen}
                aria-label="Open Menu"
            />

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}

            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
                            <VStack align="start">
                                <Link href="/" onClick={onClose} ><Text className='flex my-2' ><FaHome className='me-4' size="20px" />HOME</Text></Link>
                                <Divider />
                                <Link href="/about" onClick={onClose}><Text className='flex my-2' ><FaUser className='me-4' size="20px" />ABOUT</Text></Link>
                                <Divider />
                                <Link href="/portfolio" onClick={onClose}><Text className='flex my-2' ><MdOutlineWork className='me-4' size="20px" />PORTFOLIO</Text></Link>
                                <Divider />
                                <Link href="/contact" onClick={onClose}><Text className='flex my-2' ><IoMailOpenSharp className='me-4' size="20px" />CONTACT</Text></Link>
                                <Divider />
                                <Link href="/blog" onClick={onClose}><Text className='flex my-2' ><TbMessageCircle2Filled className='me-4' size="20px" />BLOG</Text></Link>
                                <Divider />
                                <Text
                                    onClick={(): void => toggleColorMode()}
                                    className='flex my-2 cursor-pointer'
                                >
                                    {colorMode === 'light' ? <MdLightMode className='me-4' size="20px" /> : <MdDarkMode className='me-4' size="20px" />}
                                    {colorMode === 'light' ? "LIGTH MODE" : "DARK MODE"}
                                </Text>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
