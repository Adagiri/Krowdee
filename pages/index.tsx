import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";
import MotionBox from "../components/MotionBox";
import { Button, IconButton } from "@chakra-ui/button";
import { SiFacebook, SiGithub, SiGoogle, SiTwitter } from "react-icons/si";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";

export default function Home() {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });
  const textDisplay = useBreakpointValue({ base: "none", sm: "block" });

  return (
    <Box overflowX="hidden">
      <Head>
        <title>Welcome | Krowdee!</title>
      </Head>
      <Container maxW={{ base: "370px", sm: "container.lg" }}>
        <Box textAlign="right" pt={{ base: "4", sm: "3" }}>
          <ThemeToggle />
        </Box>
        <Center height="85vh">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{
              y: 8,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 400,
              bounce: 0.25,
            }}
            textAlign="center"
          >
            <Heading fontSize="28px" fontWeight="bold" color="cyan.700">
              Welcome to Krowdee!
            </Heading>
            <Text fontSize="15px" mt="1" fontWeight="bold">
              Taking learning platform to the moon 🚀.
            </Text>

            <Box mt={{ base: 6, sm: 8 }} w={{ base: "330px", sm: "380px" }}>
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing={{ base: 3, sm: 5 }}
              >
                <Box>
                  <Button
                    as="a"
                    height="50px"
                    href={`${process.env.API_URL}/github`}
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiGithub size="18px" />}
                  >
                    github
                  </Button>
                </Box>
                <Box>
                  <Button
                    as="a"
                    href={`${process.env.API_URL}/facebook`}
                    height="50px"
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiFacebook size="18px" />}
                    colorScheme="facebook"
                  >
                    facebook
                  </Button>
                </Box>
                <Box>
                  <Button
                    as="a"
                    height="50px"
                    href={`${process.env.API_URL}/twitter`}
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiTwitter size="18px" />}
                    colorScheme="twitter"
                  >
                    twitter
                  </Button>
                </Box>
                <Box>
                  <Button
                    height="50px"
                    as="a"
                    href={`${process.env.API_URL}/google`}
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiGoogle size="18px" />}
                    colorScheme="red"
                  >
                    google
                  </Button>
                </Box>
              </SimpleGrid>
              <Box mt={6} fontSize="14px">
                <Text mt="1" fontWeight="bold">
                  By logging in you accept our
                </Text>
                <Text fontWeight="bold">
                  <Link href="/app">
                    <Button
                      as="a"
                      variant="link"
                      cursor="pointer"
                      fontSize="14px"
                    >
                      Privacy policy{" "}
                    </Button>
                  </Link>
                  {""} and{" "}
                  <Button variant="link" fontSize="14px">
                    Terms of service.
                  </Button>
                </Text>
              </Box>
            </Box>
          </MotionBox>
        </Center>
        <Box h="8vh" d="flex" alignItems="center" py={{ base: 0, sm: 2 }}>
          <Box display="flex" alignItems="center" href="/">
            <Image
              boxSize={{ base: "25px", sm: "30px" }}
              objectFit="cover"
              src="./images/krowdee-logo.svg"
              alt="logo"
            />
            <Text
              fontWeight="bold"
              fontSize={{ base: "13px", md: "18px" }}
              color="cyan.800"
              ml={{ base: 1, sm: 2 }}
              d={textDisplay}
            >
              Krowdee
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Link href="/about">
              <Button mr={2} size={buttonSize} variant="ghost" cursor="pointer">
                About
              </Button>
            </Link>
            <Link href="/donate">
              <Button mr={2} size={buttonSize} variant="ghost" cursor="pointer">
                Donate
              </Button>
            </Link>

            <Button
              mr={{ base: 1, sm: 2 }}
              size={buttonSize}
              variant="ghost"
              target="blank"
              href="https://github.com/Adagiri/krowdee"
            >
              Report a bug
            </Button>
            <IconButton
              aria-label="github-button"
              size={buttonSize}
              icon={<SiGithub />}
              as="a"
              target="blank"
              href="https://github.com/Adagiri/krowdee/issues"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
