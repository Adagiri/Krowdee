import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  List,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import Head from "next/head";
import SquadSection from "./SquadSection";

const PrepTimeStudent = () => {
  return (
    <Box>
      <Head>
        <title>Prep Time Student | Krowdee! </title>
      </Head>
      <Box height={{ base: null, sm: "87vh" }}>
        <Container maxW="container.lg">
          <Box textAlign="center" mt={5}>
            <Text mb={3} fontSize="20px" fontWeight="bold">
              29:45 mins to start
            </Text>
            <Box
              d="flex"
              w="100%"
              flexDir={{ base: "column", sm: "column", md: "row" }}
              gridGap="3em"
              mt={5}
              height="80vh"
            >
              <Box
                h="82vh"
                p={5}
                borderRadius="7px"
                border="1px solid #e2e8f0"
                textAlign="left"
                w={{ base: "100%", md: "90%" }}
                overflowY="scroll"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "3px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#edf2f7",
                    borderRadius: "24px",
                  },
                }}
              >
                <Badge>Participants</Badge>
                <Flex my={2} justify="space-between" align="center">
                  <List>
                    <ListItem fontSize="13px">
                      Lorem ipsum dolor sit amet
                    </ListItem>
                  </List>
                  <Text fontSize="13px">0</Text>
                </Flex>
                <Divider />
                <Flex my={2} justify="space-between" align="center">
                  <List>
                    <ListItem fontSize="13px">
                      Lorem ipsum dolor sit amet
                    </ListItem>
                  </List>
                  <Text fontSize="13px">0</Text>
                </Flex>
                <Divider />
              </Box>
              <Box w="100%">
                <SquadSection />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PrepTimeStudent;
