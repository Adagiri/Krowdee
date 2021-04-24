import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout"
import Head from "next/head";
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
import Link from "next/link"

import MotionBox from "../components/MotionBox"

const ErrorPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>404 | Krowdee! </title>
      </Head>
      <Container maxW="container.lg">
        <Center height="100vh" width="100%">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{
              transform: "translateY(8px)",
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
                <Image src="/images/krowdee-logo.svg" alt="Sad Svg" />
              </Box>
              <Heading fontSize="30px">Page not Found!!!</Heading>
              <Text>Lost in space??</Text>
              <Box mt={3}>
                <Button size="sm" variant="solid" colorScheme="brand">
                  <Link href="/"><a>Take me home</a></Link>
                </Button>
              </Box>
            </Box>
          </MotionBox>
        </Center>
      </Container>
    </div>
  )
}

export default ErrorPage
