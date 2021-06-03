import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import ContestPaper from "../../components/ContestPaper";
import DashNav from "../../components/DashNav";
import Head from "next/head";

const open = () => {
  return (
    <Box>
      <Head>
        <title>Open Contest | Krowdee! </title>
        <meta name="description" content="Open Contest Page" />
        <meta property="og:title" content="Open Contest" />
        <meta property="og:description" content="Open Contest | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashNav />
      <Container maxW="container.lg" mt={4}>
        <Heading fontSize="24px" mb={5}>
          Open Contest
        </Heading>
        <ContestPaper>
          <Text fontSize="xs" color="gray.400">
            create contest and see contest
          </Text>
        </ContestPaper>
      </Container>
    </Box>
  );
};

export default open;
