import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { useState } from "react";
import Step1 from "../../components/host/Step1";
import Step2 from "../../components/host/Step2";
import Step3 from "../../components/host/step3";
import Step4 from "../../components/host/step4";

const Host = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <h1><span>1</span><span>2</span><span>3</span><span>4</span></h1>
      {step === 1 ? (
        <Step1 />
      ) : step === 2 ? (
        <Step2 />
      ) : step === 3 ? (
        <Step3 />
      ) : (
        <Step4 />
      )}

      <Button onClick={() => setStep(step + 1)}>Next</Button>
    </div>
  );
};

export default Host;
