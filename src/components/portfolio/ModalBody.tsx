import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, Box } from '@chakra-ui/react';
import { DataProjectsType } from '../../../DataProjects';
import { FaEye } from "react-icons/fa";
import { MdHourglassFull, MdVpnKey } from "react-icons/md";
import Link from 'next/link';
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";
import Image from 'next/image';
import { CiLink } from "react-icons/ci";
interface ModalContentComponentProps {
    isOpen: boolean;
    onClose: () => void;
    data?: DataProjectsType | null;
}

const ModalContentComponent: React.FC<ModalContentComponentProps> = ({ isOpen, onClose, data }) => {
    const previewLink = data?.Preview ?? '#';
    const repoLink = data?.repository ?? '#';
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxWidth={{ base: '98%', md: '60%', lg: '60%', xl: '45%' }}>
                <ModalHeader>
                    <Text className='text-[#ffb400] font-bold text-2xl'>{data?.name}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                        <Box className='flex flex-row items-center space-x-3'>
                            <IoMdDocument size='20px' className="text-[#ffb400]" />
                            <Text><span className='text-[15px]'>Project:</span> <span className='font-bold'>{data?.name}</span></Text>
                        </Box>
                        <Box className='flex flex-row items-center space-x-3'>
                            <FaEye size='20px' className="text-[#ffb400]" />
                            <Text className='flex flex-row space-x-2'><span className='text-[15px]'>Preview:</span> <Link href={previewLink} className='font-bold hover:text-[#ffb400] hover:underline'><Box className='flex flex-row items-center'>View Project <CiLink size='22px' className="text-[#ffb400] ms-2 "/></Box></Link></Text>
                        </Box>
                        <Box className='flex flex-row items-center space-x-3'>
                            <RiGitRepositoryFill size='20px' className="text-[#ffb400]" />
                            <Text className='flex flex-row space-x-2'><span className='text-[15px]'>Repository:</span> <Link href={repoLink} className='font-bold hover:text-[#ffb400] hover:underline'><Box className='flex flex-row items-center'>Repository <CiLink size='22px' className="text-[#ffb400] ms-2 "/></Box></Link></Text>
                        </Box>
                        <Box className='flex flex-row items-center space-x-3'>
                            <MdHourglassFull size='20px' className="text-[#ffb400]" />
                            <Text><span className='text-[15px]'>Complected:</span> <span className='font-bold'>{data?.complected ? 'yes' : 'no'}</span></Text>
                        </Box>
                        <Box className='flex flex-row items-center space-x-3'>
                            <MdVpnKey size='20px' className="text-[#ffb400]" />
                            <Text><span className='text-[15px]'>VPN (Iran):</span> <span className='font-bold'>{data?.vpn ? 'Required' : 'Not necessary'}</span></Text>
                        </Box>
                    </Box>
                    <Box className='relative w-[100%] h-[370px] rounded-lg overflow-hidden mt-10 mb-3'>
                        <Image
                            src={data?.image? data?.image : '/images/ondevelop.jpg'}
                            alt='project Image'
                            loading="lazy"
                            fill
                            objectFit="cover"  // Ensures the image covers the entire container
                        />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalContentComponent;
