"use client"
import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';



export default function CustomIconButton({ href, icon, ariaLabel }: any) {
    const router = usePathname();
    const isActive = router === href;
    console.log(router);
    

    return (
        <Link href={href} passHref>
            <IconButton
                as="a"
                aria-label={ariaLabel}
                size="lg"
                borderRadius="full"
                icon={icon}
                bg={isActive ? 'customYellow.500' : '#8a8a8a6b'}
                color={isActive ? 'white' : 'initial'}
                _hover={{ bg: 'customYellow.500', color: 'white' }}
            />
        </Link>
    );
};