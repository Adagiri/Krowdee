import {
  Box,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";

const Step1 = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleIsChecked = () => {
    setIsChecked((s) => !s);
  };

  return (
    <Box mt={3}>
      <Heading fontSize="xl" mb={6}>
        Step One
      </Heading>
      <Box mt={4} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%" }}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 5, sm: 7 }}>
          <FormControl>
            <FormLabel fontSize={{ base: "13px", sm: "inherit" }}>
              Name
            </FormLabel>
            <Input
              fontSize={{ base: "13px", sm: "inherit" }}
              placeholder="Enter contest name..."
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "13px", sm: "inherit" }}>
              Description
            </FormLabel>
            <Input
              fontSize={{ base: "13px", sm: "inherit" }}
              placeholder="Enter description..."
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "13px", sm: "inherit" }}>
              Banner
            </FormLabel>
            <Textarea
              height={{ base: "60px", sm: "125px" }}
              fontSize={{ base: "13px", sm: "inherit" }}
              placeholder="Enter banner..."
            />
          </FormControl>
          <VStack spacing={3}>
            <FormControl display="flex" alignItems="center">
              <Switch
                isChecked={isChecked}
                onChange={handleIsChecked}
                size="sm"
                colorScheme="brand"
                id="email-alerts"
              />
              {isChecked ? (
                <Text ml={3} fontWeight="bold" fontSize="sm">
                  Closed contest
                </Text>
              ) : (
                <Text ml={3} fontWeight="bold" fontSize="sm">
                  Open contest
                </Text>
              )}
            </FormControl>
            <Box
              borderRadius="md"
              padding={4}
              width="100%"
              border={useColorModeValue(
                "1px solid #e2e8f0",
                "1px solid rgba(255, 255, 255, 0.24)"
              )}
            >
              <FormControl>
                <HStack>
                  <FormLabel
                    mb={0}
                    htmlFor="categories"
                    fontSize={{ base: "sm", sm: "sm", md: "inherit" }}
                    width={{ base: "100%", sm: "50%", md: "inherit" }}
                  >
                    Select category
                  </FormLabel>
                  <Select
                    id="categories"
                    width={{ base: "100%", sm: "70%", md: "40%" }}
                    borderRadius="5px"
                    variant="filled"
                    size="sm"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Biology">Biology</option>
                  </Select>
                </HStack>
              </FormControl>
              <FormControl mt={4} d="flex" alignItems="center">
                <FormLabel
                  mb={0}
                  htmlFor="tags"
                  mr={3}
                  fontSize={{ base: "13px", sm: "inherit" }}
                >
                  Tags
                </FormLabel>
                <Input
                  id="tags"
                  fontSize={{ base: "13px", sm: "inherit" }}
                  placeholder="Enter tags..."
                />
              </FormControl>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Step1;
