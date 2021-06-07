import { Box, Container, Flex, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import Head from "next/head";
import DashNav from "../../components/DashNav";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import LeaderBox from "../../components/leaderBox";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/tag";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { IconButton } from "@chakra-ui/button";

const result = [
    {name: "Mubarak", score: 25},
    {name: "Mustapha", score: 50},
    {name: "Hussein", score: 500},
    {name: 'Monsurat', score: 2},
    {name: 'Dagiri', score: 1}
];

const sort = result.sort((a,b) => b.score - a.score);
const winners = sort.slice(0, 3);
const others = sort.slice(3);


const Result = () => {
    return (  
        <Box>
            <Head>
            <title>Result | Krowdee!</title>
            <meta name="description" content="Result Page" />
            <meta property="og:title" content="My Result" />
            <meta property="og:description" content="Result | Krowdee!" />
            <meta property="og:image" content="/images/krowdee-logo.svg" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashNav />
            <Container maxW="container.lg">
            <Heading>
                Results
            </Heading>
                <Flex width="100%" justifyContent="space-between" my={5}>
                    <Box width="45%">
                       <Box 
                        display="inline-flex" 
                        h={350} 
                        w="100%"
                        py={5} 
                        justifyContent="center"
                        position="relative"
                    >
                            {winners.map((res, i) => (
                                <LeaderBox index={i} {...res} />
                            ))}
                       </Box>
                       <List py={5} w="100%">
                            {others.map((res, index) => (
                                <ListItem 
                                    key={res.name + index} 
                                    w="100%" 
                                    display="inline-flex" 
                                    justifyContent="space-between"
                                    mb={1}
                                >
                                    <Text 
                                        textTransform="capitalize" 
                                        as="span"
                                    >
                                        {res.name}
                                    </Text>
                                    <Text as="span">{res.score}</Text>
                                </ListItem>
                            ))}
                       </List>
                    </Box>
                    <Box width="45%" p={5}>
                        <Tag mb={5} size="lg">
                            <TagLeftIcon as={FaMicrophoneAlt} />
                            <TagLabel>Annoucement</TagLabel>
                        </Tag>
                        <Flex 
                            w="100%" 
                            h="100%" 
                            borderColor="cyan"
                            borderRadius="lg"
                            borderWidth={1}
                            borderStyle="solid"
                            pos="relative"
                            flexDir="column"
                            overflow="hidden"
                        >
                            <Flex 
                                flex={2} 
                                flexDir="column" 
                                overflowY="auto"
                                w="100%"
                                p={1.5}
                                maxH={380}
                            >
                            </Flex>
                            <Box 
                                as="form" 
                                onSubmit={() => console.log()}
                                position="absolute"
                                bottom={0}
                                w="100%"
                                p={2}
                                bgColor="gray.100"
                            >
                                <InputGroup>
                                    <Input 
                                        borderRadius= "full" 
                                        placeholder="Type your message here" 
                                        type="text"
                                        variant="outline"
                                    />
                                    <InputRightElement 
                                        children={
                                            <IconButton 
                                                icon={<FiSend />}
                                                aria-label="send"
                                                type="submit"
                                                variant="ghost"
                                                colorScheme="teal"
                                                width="max-content"
                                            />
                                        }
                                    />
                                </InputGroup>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
 
export default Result;