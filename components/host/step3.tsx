import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import DatePicker from "../DatePicker/DatePicker";
import { useState } from "react";
import { Input } from "@chakra-ui/input";

const Step3 = (): JSX.Element => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const handleChange = (date) => {
    setstartDate(date);
  };

  return (
    <Box>
      <Heading fontSize="xl" mb={6}>
        Step Three
      </Heading>
      <Box
        borderRadius="md"
        padding={5}
        w={{ base: "370px", sm: "600px" }}
        mt={3}
        border={useColorModeValue(
          "1px solid #e2e8f0",
          "1px solid rgba(255, 255, 255, 0.24)"
        )}
      >
        <FormControl d="flex" alignItems="center">
          <FormLabel mb={0} mr={2} fontSize={{ base: "15px", sm: "inherit" }}>
            Join Limit
          </FormLabel>
          <NumberInput
            defaultValue={15}
            min={10}
            max={20}
            width="80px"
            clampValueOnBlur={true}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <chakra.span ml={1.5} fontSize={{ base: "15px", sm: "inherit" }}>
            people
          </chakra.span>
        </FormControl>

        <Box mt={5}>
          <FormControl d="flex" alignItems="center">
            <FormLabel mb={0} htmlFor="start-date">
              Start Date
            </FormLabel>
            <DatePicker
              id="start-date"
              selectedDate={startDate}
              onChange={handleChange}
              showPopperArrow={false}
            />
          </FormControl>
        </Box>

        <Box mt={5}>
          <FormControl d="flex" alignItems="center">
            <FormLabel
              mb={0}
              htmlFor="set-pin"
              width={{ base: "20%", sm: "15%" }}
            >
              Set Pin
            </FormLabel>
            <Input
              id="set-pin"
              placeholder="Set Pin"
              width={{ base: "80%", md: "50%" }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
