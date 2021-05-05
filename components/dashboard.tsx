import Link from "next/link";
import Head from "next/head";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { HiOutlinePencilAlt, HiOutlineUserAdd } from "react-icons/hi";
import { RiOpenSourceLine, RiSpeakerLine } from "react-icons/ri";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useDisclosure } from "@chakra-ui/hooks";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button, IconButton } from "@chakra-ui/button";
import { useRef } from "react";
import ContestDrawer from "./ContestDrawer";
import DashNav from "./DashNav";
import ContestPaper from "./ContestPaper";

const Dashboard = () => {
  const [smAndUp] = useMediaQuery("(min-width: 479px)");
  const { onClose, onOpen, isOpen } = useDisclosure();
  const buttonTextRef = useRef<HTMLButtonElement>();

  console.log(buttonTextRef);

  return (
    <Box>
      <Head>
        <title>Krowdee | Dashboard</title>
      </Head>
      <DashNav />
      <ContestDrawer
        onClose={onClose}
        isOpen={isOpen}
        buttonTextRef={buttonTextRef}
      />
      <Box h={{ base: "91vh", sm: "90vh" }} w="100%">
        <Container maxW="container.lg">
          <Flex mt={3} justify="space-between">
            <Link href="/app/join">
              {smAndUp ? (
                <Button
                  as="a"
                  cursor="pointer"
                  size="sm"
                  leftIcon={<HiOutlineUserAdd size="18px" />}
                  bgGradient={useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  )}
                  _hover={{
                    bgGradient: useColorModeValue(
                      null,
                      "linear(#0987A0, #054450)"
                    ),
                  }}
                >
                  Join
                </Button>
              ) : (
                <IconButton
                  size="sm"
                  bgGradient={useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  )}
                  _hover={{
                    bgGradient: useColorModeValue(
                      null,
                      "linear(#0987A0, #054450)"
                    ),
                  }}
                  aria-label="create Icon"
                  icon={<HiOutlineUserAdd size="18px" />}
                />
              )}
            </Link>
            {smAndUp ? (
              <Box>
                <Button
                  size="sm"
                  cursor="pointer"
                  onClick={onOpen}
                  ref={buttonTextRef}
                  bgGradient={useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  )}
                  _hover={{
                    bgGradient: useColorModeValue(
                      null,
                      "linear(#0987A0, #054450)"
                    ),
                  }}
                  leftIcon={<HiOutlinePencilAlt size="22px" />}
                >
                  Create Contest
                </Button>
              </Box>
            ) : (
              <IconButton
                size="sm"
                onClick={onOpen}
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
                aria-label="create Icon"
                icon={<HiOutlinePencilAlt size="20px" />}
              />
            )}
          </Flex>

          <ContestPaper />

          <Flex mt={3} justify="space-between">
            <Link href="/app/join">
              {smAndUp ? (
                <Button
                  as="a"
                  cursor="pointer"
                  size="sm"
                  bgGradient={useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  )}
                  _hover={{
                    bgGradient: useColorModeValue(
                      null,
                      "linear(#0987A0, #054450)"
                    ),
                  }}
                  leftIcon={<RiSpeakerLine size="18px" />}
                >
                  Host
                </Button>
              ) : (
                <IconButton
                  size="sm"
                  aria-label="create Icon"
                  icon={<RiSpeakerLine size="18px" />}
                />
              )}
            </Link>
            {smAndUp ? (
              <Button
                size="sm"
                cursor="pointer"
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
                leftIcon={<RiOpenSourceLine size="22px" />}
              >
                Open Contest
              </Button>
            ) : (
              <IconButton
                size="sm"
                bgGradient={useColorModeValue(null, "linear(#0987A0, #054450)")}
                _hover={{
                  bgGradient: useColorModeValue(
                    null,
                    "linear(#0987A0, #054450)"
                  ),
                }}
                aria-label="create Icon"
                icon={<RiOpenSourceLine size="20px" />}
              />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
