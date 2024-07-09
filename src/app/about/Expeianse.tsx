// components/Timeline.js
import { Box, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { MdOutlineWork } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";

const TimelineItem = ({ icon, title, company, date, description }: any) => (
    <HStack align="start" spacing={4} mb={10} position="relative">
        <Box position="absolute" left={5} top={0} bottom={0} borderLeft=".1px solid" borderColor="#9d9d9d4a" zIndex={0} />
        {/* <Icon w={10} h={10} color="white" position="relative" zIndex={1} backgroundColor="customYellow.500" borderRadius="full" /> */}
        <Box className="flex justify-center items-center bg-myYellow rounded-full ms-1" position="relative" zIndex={1} w='45px' h='35px'>
            {icon}
        </Box>
        <Box pl={6} position="relative" zIndex={1}>
            <HStack>
                <Text fontWeight="bold" fontSize="lg">{title}</Text>
                <Text fontWeight="semibold" color="gray.500">— {company}</Text>
            </HStack>
            <Text fontSize="sm" >{date}</Text>
            <Text className="text-[14px]" mt={2} >{description}</Text>
        </Box>
    </HStack>
);

const Timeline = () => (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <VStack>
            <TimelineItem
                icon={<MdOutlineWork size={'20px'} color="white" />}
                title="Web Developer"
                company="Envato"
                date="2018 - Present"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
            <TimelineItem
                icon={<MdOutlineWork size={'20px'} color="white" />}
                title="UI/UX Designer"
                company="Themeforest"
                date="2013 - 2018"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
            <TimelineItem
                icon={<MdOutlineWork size={'20px'} color="white" />}
                title="Consultant"
                company="Videohive"
                date="2005 - 2013"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
        </VStack>
        <VStack>
            <TimelineItem
                icon={<LiaUniversitySolid size={'20px'} color="white" />}
                title="Engineer Degree"
                company="Oxford University"
                date="2015"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
            <TimelineItem
                icon={<LiaUniversitySolid size={'20px'} color="white" />}
                title="Master Degree"
                company="Kiev University"
                date="2012"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
            <TimelineItem
                icon={<LiaUniversitySolid size={'20px'} color="white" />}
                title="Bachelor Degree"
                company="Tunis High School"
                date="2009"
                description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit."
            />
        </VStack>
    </Box>
);

export default Timeline;
