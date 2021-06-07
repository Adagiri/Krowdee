import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Avatar } from "@chakra-ui/avatar";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import DashNav from "../../components/DashNav";
import { RiEditCircleLine, RiQuestionFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { MdSpeaker, MdUpdate } from "react-icons/md";
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/system";
import ContestDetailsCard from "../../components/ContestDetailsCard";
import { useDisclosure } from "@chakra-ui/hooks";
import ContestModal from "../../components/ContestModal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { Progress } from "@chakra-ui/progress";
import Head from "next/head";
import MotionBox from "../../components/MotionBox";
import {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/modal";

const Me = () => {
  const { colorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Head>
        <title>Profile | Krowdee!</title>
        {/* We can use something Dynamic Here... Next is mad ooo */}
        <meta name="description" content="Profile page" />
        <meta property="og:title" content="Krowdee Profile" />
        <meta property="og:description" content="Me | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashNav />
      <Container maxW="container.lg">
        <Flex align="center" justify="center" h={{ base: "", sm: "92vh" }}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{
              y: 5,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 400,
              bounce: 0.25,
            }}
            width="600px"
            px={6}
            pt={3}
            pb={6}
            boxShadow={{ base: "none", sm: "sm" }}
            border={{
              base: "none",
              sm: colorMode === "light" ? "1px solid #e2e8f0" : null,
            }}
            borderRadius="md"
          >
            <Box textAlign="right">
              <Button
                aria-label="edit"
                size="xs"
                onClick={onOpen}
                leftIcon={<RiEditCircleLine size="16px" />}
              >
                Edit profile
              </Button>

              {/* Custom Modal */}
              <ContestModal
                onClose={onClose}
                closeOnOverlayClick={false}
                motionPreset="scale"
                isOpen={isOpen}
              >
                <ModalHeader> Edit Profile </ModalHeader>
                <ModalCloseButton size="sm" />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel fontSize="12px">Username</FormLabel>
                    <Input
                      fontSize="12px"
                      borderRadius="md"
                      size="sm"
                      placeholder="Username"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel fontSize="12px">About Me</FormLabel>
                    <Textarea
                      size="sm"
                      borderRadius="md"
                      fontSize="12px"
                      placeholder="About me"
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    leftIcon={<MdUpdate size="20px" />}
                    colorScheme="brand"
                    size="sm"
                    fontSize="sm"
                  >
                    Update
                  </Button>
                </ModalFooter>
              </ContestModal>
            </Box>
            <Box d="flex" mt={4} justifyContent="center">
              <Avatar src="../pubic/images/profile.jpg" size="lg" />
            </Box>
            <Box mb={6} mt={3} textAlign="center">
              <Heading fontSize="lg">Olanrewaju AbdulAzeez</Heading>
              <Text fontSize="sm">
                You have <chakra.span fontWeight="bold">400pts</chakra.span>{" "}
              </Text>
              <Badge
                ml={1.5}
                mb={1}
                variant="solid"
                borderRadius="md"
                colorScheme="purple"
              >
                Senior
              </Badge>
              <MotionBox
                width="300px"
                m="0 auto"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  delay: 1,
                  stiffness: 400,
                }}
              >
                <Text fontSize="sm" my={2}>
                  Your progress to the next level
                </Text>
                <Progress
                  borderRadius="md"
                  size="sm"
                  width="200px"
                  margin="0 auto"
                  hasStripe
                  colorScheme="purple"
                  value={64}
                />
              </MotionBox>
              <Text fontSize="xs" mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                incidunt molestias laboriosam sunt ea amet deleniti culpa
                possimus obcaecati nisi! Illo, beatae. Consequuntur dolor
                expedita voluptatibus, est itaque porro minima?
              </Text>
            </Box>

            <SimpleGrid
              spacing={{ base: 2, sm: 3, md: 4 }}
              columns={{ base: 2, sm: 2, md: 4 }}
            >
              <Box>
                <ContestDetailsCard
                  hasInnerStack={false}
                  cardIcon={<GiTrophyCup size={25} color="#EEB609" />}
                  cardName="Wins"
                  cardPoint="10"
                />
              </Box>
              <Box>
                <ContestDetailsCard
                  hasInnerStack={true}
                  cardName="Medals"
                  cardPoint="20"
                />
              </Box>
              <Box>
                <ContestDetailsCard
                  hasInnerStack={false}
                  cardIcon={
                    <MdSpeaker
                      color={useColorModeValue("#3C1053", null)}
                      size={25}
                    />
                  }
                  cardName="Hosted"
                  cardPoint="5"
                />
              </Box>
              <Box>
                <ContestDetailsCard
                  hasInnerStack={false}
                  cardIcon={
                    <RiQuestionFill
                      color={useColorModeValue("#054450", null)}
                      size={25}
                    />
                  }
                  cardName="Participated"
                  cardPoint="10"
                />
              </Box>
            </SimpleGrid>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Me;
