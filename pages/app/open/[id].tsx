import { Box } from "@chakra-ui/layout";
import React from "react";
import DashNav from "../../../components/DashNav";
import PrepTime from "../../../components/PrepTime";
import Head from "next/head";
import PrepTimeStudent from "../../../components/PrepTimeStudent";

const ContestId = () => {
  return (
    <Box>
      <DashNav />
      {/* <PrepTime /> */}
      <PrepTimeStudent />
    </Box>
  );
};

export default ContestId;
