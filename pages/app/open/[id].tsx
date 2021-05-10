import { Box } from "@chakra-ui/layout";
import React from "react";
import DashNav from "../../../components/DashNav";
import PrepTime from "../../../components/PrepTime";
import Head from "next/head";

const ContestId = () => {
  return (
    <Box>
      <DashNav />
      <PrepTime />
    </Box>
  );
};

export default ContestId;
