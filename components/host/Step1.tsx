import React from "react";
import { MdBuild, MdCall } from "react-icons/md";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

function Step1() {
  return (
    <div>
        <h1>Choose a contest to host</h1>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
          use your own
        </Button>
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
          use a template
        </Button>
      </Stack>
    </div>
  );
}

export default Step1;
