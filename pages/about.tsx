import Head from "next/head";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import ThemeToggle from "../components/ThemeToggle";
import { chakra } from "@chakra-ui/react";
import MotionBox from "../components/MotionBox";
import Link from "next/link";
import Navbar from "../components/Navbar";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

const About = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>About | Krowdee! </title>
        <meta name="description" content="About us | Krowdee!" />
        <meta property="og:title" content="About Page | Krowdee!" />
        <meta property="og:description" content="Krowdee | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={{ base: "370px", sm: "container.lg" }}>
        <Navbar />
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
};

export default About;
