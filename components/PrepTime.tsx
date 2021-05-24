import { Button } from "@chakra-ui/button";
import { Box, Heading, SimpleGrid, Container, Text } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Portal } from "@chakra-ui/portal";
import Head from "next/head";
import CustomDrawer from "./CustomDrawer";
import SquadSection from "./SquadSection";

const PrepTime = () => {
  return (
    <Box>
      <Head>
        <title>Prep | Krowdee! </title>
      </Head>
      <Box height={{ base: null, sm: "87vh" }}>
        <Container maxW="container.lg">
          <Box textAlign="center" mt={5}>
            <Text mb={3} fontSize="20px" fontWeight="bold">
              Host: AbdulAzeez
            </Text>
            <Box
              d="flex"
              w="100%"
              flexDir={{ base: "column", sm: "column", md: "row" }}
              gridGap="3em"
              mt={5}
              height="80vh"
            >
              <Box w={{ base: "100%", md: "70%" }}>
                <SimpleGrid columns={2} spacing={3}>
                  <Box>
                    <CustomDrawer
                      isFullWidth
                      noXsButton={true}
                      buttonColorScheme="brand"
                      drawerSize="xs"
                      hasContainer={false}
                      hasCloseButton={true}
                      closeButtonSize="sm"
                      drawerHeader="Joined Participants"
                      showButtonContent="Joined (59)"
                      buttonVariant="solid"
                    >
                      <Text>List of joined Users</Text>
                    </CustomDrawer>
                  </Box>
                  <Box>
                    <CustomDrawer
                      isFullWidth
                      noXsButton={true}
                      drawerSize="xs"
                      hasContainer={false}
                      hasCloseButton={true}
                      closeButtonSize="sm"
                      drawerHeader="Questions"
                      showButtonContent="Tasks (59)"
                      buttonVariant="solid"
                    >
                      <Text>List of Questions</Text>
                    </CustomDrawer>
                  </Box>
                </SimpleGrid>
                <Box mt={5}>
                  <Popover>
                    <PopoverTrigger>
                      <Button isFullWidth variant="solid">
                        Mode [Rapid (30mins)]
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Mode</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text>Maybe Edit or Rapid Content Stuff</Text>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
                <Box textAlign="center" mt={80}>
                  <Text fontSize="20px">Starts in </Text>
                  <Heading fontSize="40px">29:45</Heading>
                </Box>
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

export default PrepTime;
