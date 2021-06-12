import Head from "next/head";
import MotionBox from "../components/MotionBox";
import { Button } from "@chakra-ui/button";
import { SiFacebook, SiGithub, SiGoogle, SiTwitter } from "react-icons/si";
import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from "../lib/firebase";
import { useMutation } from "@apollo/client";
import { getToken, setToken, setUser } from "../helpers/auth";
import { LOGIN_WITH_SOCIAL } from "../state/remote/mutations";
import { useState } from "react";
import router from "next/router";
import Router from "next/router";

type Profile = {
  id: string;
  name: string;
};

const Home = (): JSX.Element => {
  const [providerId, setProviderId] = useState("");
  const [sid, setSid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginWithSocial, { loading, data, error }] = useMutation(
    LOGIN_WITH_SOCIAL,
    { variables: { sid, providerId, name, email } }
  );

  if (!getToken("ktoken")) {
    // Router.push("/app");
  }
  return (
    <Box overflowX="hidden">
      <Head>
        <title>Welcome | Krowdee!</title>
        <meta name="description" content="Welcome to Krowdee" />
        <meta property="og:title" content="Krowdee HomePage" />
        <meta property="og:description" content="Krowdee | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={{ base: "370px", sm: "container.lg" }}>
        <Navbar />
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
                {/* <Box>
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
                </Box> */}
                <Box>
                  <Button
                    as="a"
                    cursor="pointer"
                    // href={`${process.env.API_URL}/facebook`}
                    height="50px"
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiFacebook size="18px" />}
                    colorScheme="facebook"
                    onClick={() => {
                      auth
                        .signInWithPopup(facebookAuthProvider)
                        .then((user) => {
                          const userProfile: any =
                            user.additionalUserInfo.profile;
                          setProviderId("facebook");
                          setName(userProfile.name);
                          setSid(userProfile.id);
                          setEmail(userProfile.email);
                          //call the apollo mutation function initialised above
                          loginWithSocial()
                            .then((data) => {
                              setToken(
                                "ktoken",
                                data.data.loginWithSocial.token
                              );
                              setUser(data.data.loginWithSocial.user);
                              router.push("/app");
                              //set Token and store user in local storage
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    }}
                  >
                    facebook
                  </Button>
                </Box>
                {/* <Box>
                  <Button
                    as="a"
                    height="50px"
                 
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiTwitter size="18px" />}
                    colorScheme="twitter"
                    onClick={() => {
                      auth.signInWithPopup(twitterAuthProvider).then((user) => {
                        console.log(user);
                      });
                    }}
                  >
                    twitter
                  </Button>
                </Box> */}
                <Box>
                  <Button
                    height="50px"
                    as="a"
                    cursor="pointer"
                    // href={`${process.env.API_URL}/google`}
                    borderRadius="10px"
                    width={{ base: "280px", sm: "180px" }}
                    leftIcon={<SiGoogle size="18px" />}
                    colorScheme="red"
                    onClick={() => {
                      auth
                        .signInWithPopup(googleAuthProvider)
                        .then((user) => {
                          const userProfile: any =
                            user.additionalUserInfo.profile;
                          setProviderId("google");
                          setName(userProfile.name);
                          setSid(userProfile.id);
                          setEmail(userProfile.email);
                          //call the apollo mutation function initialised above
                          loginWithSocial()
                            .then((data) => {
                              setToken(
                                "ktoken",
                                data.data.loginWithSocial.token
                              );
                              setUser(data.data.loginWithSocial.user);
                              router.push("/app");
                              //set Token and store user in local storage
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    }}
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
                  <Link href="/privacy-policy">
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
              <Box>
                <Button
                  as="a"
                  mt="2"
                  height="50px"
                  cursor="pointer"
                  borderRadius="10px"
                  width={{ base: "260px", sm: "160px" }}
                  // leftIcon={<SiTwitter size="18px" />}
                  colorScheme="blue"
                  onClick={() => {
                    router.push("/app");
                  }}
                >
                  Go Dashboard
                </Button>
              </Box>
            </Box>
          </MotionBox>
        </Center>
      </Container>
    </Box>
  );
};

export default Home;
