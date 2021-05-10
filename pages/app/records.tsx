import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import ContestPaper from "../../components/ContestPaper";
import DashNav from "../../components/DashNav";

const records = () => {
  return (
    <Box>
      <Head>
        <title>Records | Krowdee!</title>
      </Head>
      <DashNav />
      <Container maxW="container.lg">
        <Flex align="center" w="230px" mt={6}>
          <Heading fontSize="24px" mr={2}>
            Records
          </Heading>

          <Select size="sm" borderRadius="4px" variant="filled">
            <option value="hosted">Hosted</option>
            <option value="joined">Joined</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </Select>
        </Flex>
        <Box textAlign="center" mt={2} mb={3}>
          <Text fontSize="10px"> Records disappears in 24hrs!</Text>
        </Box>
        <ContestPaper>
          <Text fontSize="xs" color="gray.400">
            create contest and see magic
          </Text>
        </ContestPaper>
      </Container>
    </Box>
  );
};

export default records;
