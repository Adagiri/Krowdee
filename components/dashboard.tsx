import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { HiOutlineLockClosed, HiOutlinePencilAlt } from "react-icons/hi";
import { RiOpenSourceLine, RiSpeakerLine } from "react-icons/ri";
import { useBreakpointValue, useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Head from "next/head";
import Link from "next/link";
import CustomDrawer from "./CustomDrawer";
import DashNav from "./DashNav";
import ContestPaper from "./ContestPaper";
import CreateContestContent from "./CreateContestContent";

const Dashboard = () => {
  const [smAndUp] = useMediaQuery("(min-width: 479px)");
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });
  const iconSize = useBreakpointValue({ base: "16px", sm: "18px" });

  return (
    <Box>
      <Head>
        <title>Dashboard | Krowdee! </title>
      </Head>
      <DashNav />
      <Box h={{ base: "91vh", sm: "90vh" }} w="100%">
        <Container maxW="container.lg">
          <Flex mt="12px" justify="space-between" mb={3}>
            <Link href="/app/host">
              <Button
                cursor="pointer"
                size={buttonSize}
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
              hasContainer
              isFullWidth={false}
              drawerSize="full"
              hasVariant
              buttonVariant="solid"
              iconName={<HiOutlinePencilAlt size={smAndUp ? "22px" : "18px"} />}
              showButtonContent="Create"
              hasCloseButton
              closeButtonSize="sm"
              drawerHeader="Create Contest"
            >
              <CreateContestContent />
            </CustomDrawer>
          </Flex>

          <ContestPaper>
            <Text fontSize="xs" color="gray.400">
              create contest and see...
            </Text>
          </ContestPaper>

          <Flex mt={3} justify="space-between">
            <Link href="/app/closed">
              <Button
                cursor="pointer"
                size={buttonSize}
                leftIcon={<HiOutlineLockClosed size={iconSize} />}
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
              >
                Closed Contest
              </Button>
            </Link>

            <Link href="/app/open">
              <Button
                cursor="pointer"
                size={buttonSize}
                leftIcon={<RiOpenSourceLine size={iconSize} />}
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
              >
                Open Contest
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
