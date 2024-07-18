'use client'
import { Box, Text } from "@chakra-ui/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "react-toastify";
import { IoCopy } from "react-icons/io5";

interface propType {
    heading: string;
    content: string;
    copyOption: boolean;
    copyText?: string;
}

export function InfoText(props: propType) {
    const { content, heading, copyOption, copyText } = props
    return (
        <Box className='flex flex-col md:flex-row'>
            <Text className='text-[15px]' >{heading} : &nbsp; </Text>
            {copyOption && (
                <CopyToClipboard text={copyText? copyText : ''} onCopy={() => toast.success('Text copyied')}>
                    <span className="flex flex-row items-center  ms-3 lg:ms-0 font-bold" style={{ cursor: 'pointer' }}>
                        {content} <Box className="ps-3"><IoCopy className="text-[#ffb400]"/></Box>
                    </span>
                </CopyToClipboard>
            )}
            {(!copyOption) && (
                <Text as="span" className='ms-3 lg:ms-0 font-bold'>{content}</Text>
            )}
        </Box>
    )
}