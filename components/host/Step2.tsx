import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Switch } from "@chakra-ui/switch";
import { chakra, useTheme } from "@chakra-ui/system";
import { useState } from "react";

const Step2 = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const theme = useTheme();

  console.log(theme);
  const handleIsChecked = () => {
    setIsChecked((s) => !s);
  };

  return (
    <Box>
      <Heading fontSize="xl" mb={6}>
        Step Two
      </Heading>
      <Box mt={4} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%" }}>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={{ base: "13px", sm: "inherit" }} m={0}>
            Choose contest type
          </FormLabel>
          <Switch
            isChecked={isChecked}
            onChange={handleIsChecked}
            size="sm"
            ml={3}
            colorScheme="brand"
            id="email-alerts"
          />
          {isChecked ? (
            <Text
              ml={1.5}
              fontWeight="bold"
              fontSize={{ base: "12px", sm: "sm" }}
            >
              Blitz
            </Text>
          ) : (
            <Text
              ml={1.5}
              fontWeight="bold"
              fontSize={{ base: "12px", sm: "sm" }}
            >
              Rapid
            </Text>
          )}
        </FormControl>

        <Box
          borderRadius="md"
          padding={4}
          mt={3}
          border={useColorModeValue(
            "1px solid #e2e8f0",
            "1px solid rgba(255, 255, 255, 0.24)"
          )}
        >
          <Box
            d="flex"
            alignItems="center"
            gridGap={{ base: "1em", sm: "1.5em" }}
            flexWrap={{ base: "wrap", sm: "wrap", md: null }}
          >
            <FormControl d="flex" alignItems="center">
              <FormLabel
                mb={0}
                mr={2}
                fontSize={{ base: "15px", sm: "inherit" }}
              >
                Total time
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
                mins
              </chakra.span>
            </FormControl>

            <FormControl d="flex" alignItems="center">
              <FormLabel
                mb={0}
                mr={2}
                fontSize={{ base: "15px", sm: "inherit" }}
              >
                Total time for all questions
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
                mins
              </chakra.span>
            </FormControl>
          </Box>

          <Box
            display={isChecked ? "block" : "none"}
            borderRadius="md"
            padding={3}
            mt={3}
            border={useColorModeValue(
              "1px solid #e2e8f0",
              "1px solid rgba(255, 255, 255, 0.24)"
            )}
          >
            <Box d="flex" gridGap={4} alignItems="center">
              {/* Just Render the List below for Each Question */}
              <OrderedList>
                <ListItem fontSize="md">List Each Question</ListItem>
              </OrderedList>
              <Box d="flex" alignItems="center">
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
                <chakra.span
                  ml={1.5}
                  fontSize={{ base: "15px", sm: "inherit" }}
                >
                  mins
                </chakra.span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Step2;
