import { Text } from "@chakra-ui/react";


export default function HoverText(props: {text: string}) {
    return (
        <Text className="absolute inset-0 flex items-center justify-center bg-myYellow text-white  transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out font-bold text-xl">
            {props.text}
        </Text>
    )
}
