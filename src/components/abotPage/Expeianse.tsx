// components/Timeline.js
import { Box, VStack, HStack, Icon, Text, Badge } from "@chakra-ui/react";
import { MdOutlineWork } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";



const TimelineItem = ({ icon, title, company, date, description }: any) => {


    return (
        <HStack align="start" spacing={4} mb={10} position="relative">
            <Box position="absolute" left={{base: '20px', md: '20px', lg: '25px'}} top={0} bottom={0} borderLeft=".1px solid" borderColor="#9d9d9d4a" zIndex={0} />
            {/* <Icon w={10} h={10} color="white" position="relative" zIndex={1} backgroundColor="customYellow.500" borderRadius="full" /> */}
            <Box className="flex justify-center items-center bg-myYellow rounded-full ms-1" position="relative" zIndex={1} p={{ base: 1, lg: 2 }}>
                {icon}
            </Box>
            <Box pl={{ base: 2, lg: 6 }} position="relative" zIndex={1}>
                <Box className="block md:hidden mb-2">
                    <Badge colorScheme='orange'  className="block md:hidden">{date}</Badge>
                </Box>
                <Box className="flex flex-col md:flex-row md:space-x-5">
                    <Text className="" fontWeight="bold" fontSize="lg">{title}</Text>
                    <Text className="" fontWeight="semibold" color="gray.500">— {company}</Text>
                </Box>
                <Text className="hidden md:block" fontSize="sm" >{date}</Text>
                <Text className="text-[14px]" mt={2} >{description}</Text>
            </Box>
        </HStack>
    )
};

const Timeline = () => (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <VStack>
            <TimelineItem
                icon={<MdOutlineWork size={'25px'} color="white" />}
                title="Front-end Developer"
                company="E-Tek"
                date="2023 - 2024"
                description="Implementation and optimization of the project based on customer needs and requirements."
            />
            <TimelineItem
                icon={<MdOutlineWork size={'25px'} color="white" />}
                title="Front-end Developer"
                company="Davis"
                date="2021 - 2022"
                description="Collaborate with stacksholders, product, and design teams to refine product requrements and design and develop user-friendly and responsive application"
            />
            <TimelineItem
                icon={<MdOutlineWork size={'25px'} color="white" />}
                title="Front-end Developer"
                company="E-sys"
                date="2019 - 2020"
                description="Creation reusable components, Set Redux-toolkit as global project state manager, and Replacing Tailwind with Bootstrap for UI, styles."
            />
        </VStack>
        <VStack>
            <TimelineItem
                icon={<LiaUniversitySolid size={'25px'} color="white" />}
                title="Teaching Assistant"
                company="Azad University"
                date="2022"
                description="Assisting the professor with a wide range of educational initiatives, while actively participating in collaborative projects aimed at enhancing the learning experience and furthering academic objectives."
            />
            <TimelineItem
                icon={<LiaUniversitySolid size={'25px'} color="white" />}
                title="Bachelor's degree"
                company="Azad University"
                date="2023"
                description="I am currently pursuing a bachelor's degree in software engineering at Islamic Azad University, Kangavar branch."
            />
            <TimelineItem
                icon={<LiaUniversitySolid size={'25px'} color="white" />}
                title="Bachelor Degree"
                company="Talash Technical School"
                date="2020"
                description="Achieved a diploma in Networking and Software from Talash Technical School, demonstrating proficiency in essential technical skills and knowledge in the field."
            />
        </VStack>
    </Box>
);

export default Timeline;
