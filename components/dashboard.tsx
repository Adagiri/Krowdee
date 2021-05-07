import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/layout";
import { HiOutlinePencilAlt, HiOutlineUserAdd } from "react-icons/hi";
import { RiOpenSourceLine, RiSpeakerLine } from "react-icons/ri";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Head from "next/head";
import Link from "next/link";
import CustomDrawer from "./CustomDrawer";
import DashNav from "./DashNav";
import ContestPaper from "./ContestPaper";
import CreateContestContent from "./CreateContestContent";
import OpenContestContent from "./OpenContestContent";

const Dashboard = () => {
  const [smAndUp] = useMediaQuery("(min-width: 479px)");

  return (
    <Box>
      <Head>
        <title>Dashboard | Krowdee! </title>
      </Head>
      <DashNav />

      <Box h={{ base: "91vh", sm: "90vh" }} w="100%">
        <Container maxW="container.lg">
          <Flex mt="10px" justify="space-between" mb={3}>
            <Link href="/app/join">
              <Button
                as="a"
                cursor="pointer"
                size={smAndUp ? "sm" : "xs"}
                leftIcon={<HiOutlineUserAdd size={smAndUp ? "18px" : "16px"} />}
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
              >
                Join
              </Button>
            </Link>
            <CustomDrawer
              hasContainer
              isFullWidth={false}
              drawerSize="full"
              hasVariant
              buttonVariant="solid"
              iconName={<HiOutlinePencilAlt size={smAndUp ? "22px" : "18px"} />}
              showButtonContent="Create Contest"
              hasCloseButton
              closeButtonSize="sm"
              drawerHeader="Create Contest"
            >
              <CreateContestContent />
            </CustomDrawer>
          </Flex>

          <ContestPaper />

          <Flex mt={3} justify="space-between">
            <Link href="/app/host">
              <Button
                as="a"
                cursor="pointer"
                size={smAndUp ? "sm" : "xs"}
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
                leftIcon={<RiSpeakerLine size={smAndUp ? "18px" : "14px"} />}
              >
                Host
              </Button>
            </Link>

            <CustomDrawer
              hasContainer={false}
              drawerSize="full"
              isFullWidth={false}
              hasVariant
              buttonVariant="solid"
              iconName={<RiOpenSourceLine size={smAndUp ? "22px" : "18px"} />}
              showButtonContent="Open Contest"
              hasCloseButton
              closeButtonSize="sm"
              drawerHeader="Open Contest"
            >
              <OpenContestContent />
            </CustomDrawer>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
