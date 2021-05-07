import { Button } from "@chakra-ui/button";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Container,
  Text,
} from "@chakra-ui/layout";
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
import CustomDrawer from "../../components/CustomDrawer";
import DashNav from "../../components/DashNav";

const host = () => {
  return (
    <Box>
      <Head>
        <title>Host | Krowdee! </title>
      </Head>
      <DashNav />
      <Box height={{ base: null, sm: "90vh" }}>
        <Container maxW="container.md">
          <Box textAlign="center" mt={3}>
            <Heading>Prep Time</Heading>
            <Text>Host: AbdulAzeez</Text>

            <Grid templateColumns="repeat(12, 1fr)" gap={3} mt={3}>
              <GridItem colSpan={{ base: 12, sm: 6 }}>
                <SimpleGrid columns={2} spacing={3}>
                  <Box>
                    <CustomDrawer
                      isFullWidth
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
                <Box textAlign="center">
                  <Text>Starts in </Text>
                  <Heading>29:45</Heading>
                </Box>
              </GridItem>
              <GridItem colSpan={6}>I'm coming...</GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default host;
