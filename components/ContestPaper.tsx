import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Text } from "@chakra-ui/layout";

const ContestPaper = () => {
  return (
    <Box
      p={3}
      mt={3}
      h="490px"
      borderRadius="sm"
      overflowY="scroll"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Center w="100%" h="100%">
        <Text fontSize="xs" color="gray.400">
          create contest and see magic
        </Text>
      </Center>
    </Box>
  );
};

export default ContestPaper;
