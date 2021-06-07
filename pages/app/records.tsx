import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import { RiArrowDropDownLine } from "react-icons/ri";
import ContestPaper from "../../components/ContestPaper";
import DashNav from "../../components/DashNav";

const records = () => {
  return (
    <Box>
      <Head>
        <title>Records | Krowdee!</title>
        <meta name="description" content="Records Page" />
        <meta property="og:title" content="My Records" />
        <meta property="og:description" content="Records | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashNav />
      <Container maxW="container.lg">
        <Flex align="center" w="220px" mt={6}>
          <Heading fontSize="24px" mr={2}>
            Records
          </Heading>

          <Select
            size="sm"
            variant="filled"
            borderRadius="md"
            icon={<RiArrowDropDownLine />}
          >
            <option value="hosted">Hosted</option>
            <option value="joined">Joined</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </Select>
        </Flex>
        <Box mt={2} mb={3}>
          <Text fontWeight="bold" fontSize="12px">
            {" "}
            Records disappears in 24hrs!
          </Text>
        </Box>
        <ContestPaper>
          <Text fontSize="xs" color="gray.400">
            create contest and see...
          </Text>
        </ContestPaper>
      </Container>
    </Box>
  );
};

export default records;
