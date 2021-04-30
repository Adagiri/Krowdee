import Head from "next/head";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import ThemeToggle from "../components/ThemeToggle";
import { chakra, IconButton } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import MotionBox from "../components/MotionBox";
import Link from "next/link";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout() {
  return (
    <Box>
      <Head>
        <title>About | Krowdee! </title>
      </Head>
      <Container maxW={{ base: "370px", sm: "container.lg" }}>
        <Box textAlign="right" pt={{ base: "4", sm: "3" }}>
          <ThemeToggle />
        </Box>
        <MotionBox
          mt={8}
          initial={{ opacity: 0 }}
          animate={{
            x: 8,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 400,
            bounce: 0.25,
          }}
        >
          <Heading fontSize={{ base: "28px" }}>About Krowdee!!</Heading>
          <Text mt={2} fontSize={{ base: "15.5px" }}>
            <chakra.span color="cyan.700" fontWeight="bold">
              Krowdee!
            </chakra.span>{" "}
            is a free learning platform that wants aims make learning easy for
            everyone, including children, students, and employees, to unlock
            their full learning potential.
          </Text>
          <Text mt={2} fontSize={{ base: "15.5px" }}>
            Our learning platform makes it easy for any individual or
            corporation to create, share, and play learning contest which can be
            either{" "}
            <chakra.span fontWeight="bold"> public or private</chakra.span>.
            Krowdee! contest can be played anywhere around the world, using any
            device with an internet connection. Most importantly, it's free.
          </Text>

          <Box mt={8}>
            <Heading fontSize={{ base: "28px" }}>Krowdee Team</Heading>
            <Text mt={2} fontSize={{ base: "15.5px" }}>
              The Amazing Team consist of two engineerers who has contributed
              time, effort, and thought to{" "}
              <chakra.span color="cyan.700" fontWeight="bold">
                Krowdee!
              </chakra.span>{" "}
              . Without them, this project would not be possible..
              <chakra.span color="cyan.700">
                <Link href="/donate">
                  <a>Support us 👏.</a>
                </Link>
              </chakra.span>{" "}
            </Text>
            <Text mt={2} fontSize={{ base: "15.5px" }}>
              <chakra.span color="cyan.700" fontWeight="bold">
                Krowdee!
              </chakra.span>{" "}
              is{" "}
              <chakra.a href="https://github.com/Adagiri/krowdee">
                open source
              </chakra.a>{" "}
              and it is freely designed for use in the classroom, at
              work—whether in-person or virtual— or at home for social use or
              self-study. Help us grow Krowdee! by contributing and also using
              it.
            </Text>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
