import { Box, Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { ContactButton } from "../components/Home/ContactButton";
import { GithubButton } from "../components/Home/GithubButton";
import { Profile } from "../components/Home/profile";

export default function HomeIndex(){
    const [ session ] = useSession()

    const txtColor = useColorModeValue("gray.700", "gray.400")
    const linkColor = useColorModeValue("blue.800", "blue.300")
    const lineColor = useColorModeValue("gray.700", "gray.500")
    const bg = useColorModeValue("gray.200", "gray.900")

    return(
        <Flex
            w="100%"
            h="100vh"
            bg={bg}
            _after={{
                pos: "absolute",
                content: "''",
                h: "2px",
                w: "100%",
                bg: lineColor,
                top: "100px"
            }}
        >

            <GithubButton />

            <Profile 
                avatar="https://avatars.githubusercontent.com/u/80000943?v=4"
                name="Lucas Ezidro"
                email="lucasezidro7@gmail.com"
                alt="Lucas Ezidro"
            />

            <Heading pos="absolute" top="160px" left="210px">
                👋 Hi My name is Lucas Ezidro!
            </Heading>

            <Box mt="220px">
                <Text fontSize="30" pos="relative" right="25px" color={txtColor}>i'm a front-end developer</Text>
                <Box display="flex" mt="8">
                    <Text mr="2">To learn more about my work</Text>
                    <Link href="/projects" color={linkColor}>click here</Link>
                </Box>

                <ContactButton />


            </Box>
        </Flex>
    )
}