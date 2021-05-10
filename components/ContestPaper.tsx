import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Text } from "@chakra-ui/layout";

const ContestPaper = ({ children }) => {
  return (
    <Box
      p={3}
      h="490px"
      borderRadius="md"
      overflowY="scroll"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Center w="100%" h="100%">
        {children}
      </Center>
    </Box>
  );
};

export default ContestPaper;
