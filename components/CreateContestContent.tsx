import { IconButton } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const CreateContestContent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Box>
      <FormControl mb={3}>
        <FormLabel>Add question 01</FormLabel>
        <Input placeholder="Question" fontSize="sm" />
      </FormControl>
      <FormControl>
        <InputGroup>
          <Input
            height="250px"
            type="file"
            fontSize="sm"
            textAlign="center"
            py={3}
            placeholder="Click here to upload an image if you've got one"
            size="lg"
          />
        </InputGroup>
      </FormControl>

      <Box d="flex" my={3} alignItems="center">
        <chakra.span fontSize="md" fontWeight="semibold">
          Add Options
        </chakra.span>
        <IconButton
          size="xs"
          ml={2}
          icon={<BiMinus />}
          onClick={() => setCount(count - 1)}
          aria-label="minus-button"
        />
        <chakra.span mx={2} fontSize="sm" fontWeight="semibold">
          {count}
        </chakra.span>
        <IconButton
          size="xs"
          icon={<BiPlus />}
          onClick={() => setCount(count + 1)}
          aria-label="add-button"
        />
      </Box>
      {/*What to render when the button is Clicked  */}
      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={2}>
        <Box>
          <FormControl>
            <InputGroup size="sm" borderRadius="lg">
              <InputLeftAddon children="a" />
              <Input placeholder="add answer" />
              <InputRightAddon px={1}>
                <IconButton
                  icon={<BsCheckCircle size="15px" />}
                  size="xs"
                  aria-label="check-button"
                />
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CreateContestContent;
