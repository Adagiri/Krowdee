import Head from "next/head";
import { Box, Container, Heading, Text, Center } from "@chakra-ui/layout";
import ThemeToggle from "../components/ThemeToggle";
import MotionBox from "../components/MotionBox";
import StackedCard from "../components/StackedCard";
import Navbar from "../components/Navbar";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

const Donate = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Donate | Krowdee! </title>
      </Head>
      <Container maxW={{ base: "370px", sm: "container.lg" }}>
        <Navbar />
        <Center
          height={{ base: "85vh", sm: "75vh" }}
          p={{ base: 0, sm: 3 }}
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{
              y: 10,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 400,
              bounce: 0.25,
            }}
          >
            <Box px={{ base: 2, sm: 5 }} mb={8}>
              <Heading size="lg" fontWeight="bold" color="brand">
                Support Krowdee 💖.
              </Heading>
              <Box maxW="800px">
                <Text mt={2} px={{ base: 0, sm: 0, md: "30px" }}>
                  The Team at Krowdee devote their time, effort, and heart to
                  ensure Krowdee keeps getting better. Your donation helps pay
                  for the development, servers, and most especially people.
                  Support us by donating to our collective 🙏.
                </Text>
              </Box>
            </Box>

            <StackedCard
              button="Donate"
              donateContent="Sponsor the Krowdee Team"
              logo="https://website-v3-assets.s3.amazonaws.com/assets/img/hero/Paystack-mark-white-twitter.png"
              avatarName="Pay Stack"
              link="https://paystack.com/pay/krowdee"
              donateProvider="PayStack"
            />

            <Box mt={4}>
              <StackedCard
                button="Donate"
                donateContent="Sponsor the Krowdee Creators"
                logo="https://pbs.twimg.com/profile_images/1212391761231912961/1IGEH-xg.jpg"
                avatarName="Flutter Wave"
                link="https://dashboard.flutterwave.com/donate/ah3bs1nzaw6u"
                donateProvider="Flutter Wave"
              />
            </Box>
          </MotionBox>
        </Center>
      </Container>
    </div>
  );
};

export default Donate;
