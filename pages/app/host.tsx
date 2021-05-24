import { Button } from "@chakra-ui/button";
import { useState } from "react";
import { Box, Container, Stack } from "@chakra-ui/layout";
import Head from "next/head";
import DashNav from "../../components/DashNav";
import Step1 from "../../components/host/Step1";
import Step2 from "../../components/host/Step2";
import Step3 from "../../components/host/step3";
import Step4 from "../../components/host/step4";

const Host = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      <Head>
        <title>Host | Krowdee!</title>
      </Head>
      <DashNav />
      <Container maxW="container.lg" h="90vh">
        {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}
        <Stack mt={9} spacing={2} direction="row" justify="flex-end">
          {step > 1 && (
            <Button
              size="sm"
              colorScheme="brand"
              onClick={() => setStep(step - 1)}
            >
              Prev
            </Button>
          )}
          {step < 3 && (
            <Button
              size="sm"
              colorScheme="brand"
              onClick={() => setStep(step + 1)}
            >
              Next
            </Button>
          )}
          {step >= 3 && (
            <Button
              size="sm"
              colorScheme="brand"
              onClick={() => setStep(step + 1)}
            >
              Submit
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Host;
