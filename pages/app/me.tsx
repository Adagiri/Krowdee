import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import DashNav from "../../components/DashNav";
import { RiEditCircleLine, RiQuestionFill } from "react-icons/ri";
import { IoCreate } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { MdSpeaker } from "react-icons/md";
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/system";
import ContestDetailsCard from "../../components/ContestDetailsCard";
import { useDisclosure } from "@chakra-ui/hooks";
import ContestModal from "../../components/ContestModal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { Progress } from "@chakra-ui/progress";
import Head from "next/head";
import MotionBox from "../../components/MotionBox";

const Me = () => {
  const { colorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Head>
        <title>Krowdee | Profile</title>
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
              <IconButton
                aria-label="edit"
                size="xs"
                onClick={onOpen}
                icon={<RiEditCircleLine size="16px" />}
              />

              {/* Custom Modal */}
              <ContestModal
                hasCloseButton={true}
                hasFooter={true}
                onClose={onClose}
                closeOnOverlayClick={false}
                motionPreset="scale"
                isOpen={isOpen}
                modalHeader="Edit Profile"
              >
                <FormControl>
                  <FormLabel fontSize="14px">Username</FormLabel>
                  <Input fontSize="14px" placeholder="Username" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontSize="14px">About Me</FormLabel>
                  <Textarea fontSize="14px" placeholder="About me" />
                </FormControl>
              </ContestModal>
            </Box>
            <Box d="flex" justifyContent="center">
              <Avatar src="../pubic/images/profile.jpg" size="2xl" />
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
