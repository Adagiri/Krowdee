import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import MotionBox from "../components/MotionBox";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { FC } from "react";

const ErrorPage: FC = () => {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });

  return (
    <Box>
      <Head>
        <title>404 | Krowdee! </title>
        <meta name="description" content="404 Page" />
        <meta property="og:title" content="404 | Krowdee!" />
        <meta property="og:description" content="404 Page | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg">
        <Center height="100vh" width="100%">
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
            <Box textAlign="center">
              <Box m="0 auto" w="150px" mb={5}>
                <Image
                  width="150px"
                  height="150px"
                  src="/images/sad.svg"
                  alt="Sad Svg"
                />
              </Box>
              <Heading fontSize={{ base: "22px", sm: "30px" }}>
                Page not Found!!!
              </Heading>
              <Text>Lost in space??</Text>
              <Box mt={3}>
                <Link passHref href="/">
                  <Button size={buttonSize} variant="link" colorScheme="brand">
                    Take me home
                  </Button>
                </Link>
              </Box>
            </Box>
          </MotionBox>
        </Center>
      </Container>
    </Box>
  );
};

export default ErrorPage;
