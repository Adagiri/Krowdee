import { Box } from "@chakra-ui/layout";
import Head from "next/head";

const Leaderboard = () => {
  return (
    <Box>
      <Head>
        <title>Leaderboard | Krowdee! </title>
        <meta name="description" content="Leaderboard Page" />
        <meta property="og:title" content="Leaderboard for Krowdee Stars" />
        <meta property="og:description" content="Leaderboard | Krowdee!" />
        <meta property="og:image" content="/images/krowdee.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Leaderboard page</h1>
    </Box>
  );
};

export default Leaderboard;
