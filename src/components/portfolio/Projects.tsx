"use client"
import { Box, useDisclosure } from "@chakra-ui/react";
import HoverText from "./HoverText";
import Image from "next/image";
import ModalContentComponent from "./ModalBody";
import { useState } from "react";
import { DataProjects, DataProjectsType } from "../../../DataProjects";


export default function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalData, setModalData] = useState<DataProjectsType | null>(null)
    const handleModal = (info: DataProjectsType): void => {
        setModalData(info);
        onOpen();
    }
    return (
        <>
            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">

                {DataProjects.map((item: DataProjectsType) =>
                    <Box key={item.repository} onClick={(): void => handleModal(item)} className="relative max-w-[100%] h-[250px] rounded-lg bg-orange-500 overflow-hidden group shadow-lg shadow-[#9796964a]">
                        <Image
                            src={item.image}
                            alt="Steve Milner"
                            loading="lazy"
                            fill
                            objectFit="cover"  // Ensures the image covers the entire container
                        />
                        <HoverText text="Hover Text" />
                    </Box>
                )}
            </Box>
            <ModalContentComponent isOpen={isOpen} onClose={onClose} data={modalData} />
        </>
    )
}
