import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import ContestPaper from "../../components/ContestPaper";
import DashNav from "../../components/DashNav";

const records = () => {
  return (
    <Box>
      <Head>
        <title>Krowdee | Records</title>
      </Head>
      <DashNav />
      <Container maxW="container.lg">
        <Flex align="center" w="220px" mt={6}>
          <Heading fontSize="24px" mr="2">
            Records
          </Heading>
          <Select size="sm" borderRadius="5px" variant="filled">
            <option value="hosted">Hosted</option>
            <option value="joined">Joined</option>
          </Select>
        </Flex>
        <ContestPaper />
      </Container>
    </Box>
  );
};

export default records;
