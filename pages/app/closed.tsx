import { Box, Center, Container, Text } from "@chakra-ui/layout";
import ThemeToggle from "../../components/ThemeToggle";
import MotionBox from "../../components/MotionBox";
import { Button, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import Head from "next/head";

const Join = () => {
  return (
    <div>
      <Head>
        <title>Join | Krowdee! </title>
      </Head>
      <Container maxW={{ base: "340px", sm: "container.lg" }}>
        <Box textAlign="right" pt={{ base: "4", sm: "3" }}>
          <ThemeToggle />
        </Box>
        <Center height="83vh" width="100%">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{
              transform: "translateY(15px)",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 400,
              bounce: 0.25,
            }}
          >
            <Box>
              <Image
                m="0 auto"
                boxSize="40px"
                objectFit="cover"
                src="/images/krowdee-logo.svg"
                alt="logo"
              />
              <Text fontSize="25px" mt={5} fontWeight="bold" textAlign="center">
                Join Closed contest!!
              </Text>
            </Box>

            <Box mt={3}>
              <Input
                placeholder="Enter contest pin"
                size="sm"
                borderRadius="base"
              />

              <Box mt={4}>
                <Button
                  variant="solid"
                  colorScheme="brand"
                  size="sm"
                  isFullWidth
                >
                  Join Contest
                </Button>
              </Box>
            </Box>
          </MotionBox>
        </Center>
      </Container>
    </div>
  );
};

export default Join;
