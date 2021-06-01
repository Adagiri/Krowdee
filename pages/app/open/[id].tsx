import { Box } from "@chakra-ui/layout";
import React from "react";
import DashNav from "../../../components/DashNav";
import PrepTime from "../../../components/PrepTime";
import Head from "next/head";
import PrepTimeStudent from "../../../components/PrepTimeStudent";
import ResultTime from "../../../components/ResultTime";

const ContestId = () => {
  return (
    <Box>
      <DashNav />
      {/* <PrepTime /> */}
      {/* <PrepTimeStudent /> */}
      <ResultTime />
    </Box>
  );
};

export default ContestId;
