import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import ContestPaper from "./ContestPaper";

const OpenContestContent = () => {
  return (
    <Box>
      <Select width="150px" size="sm" borderRadius="8px" variant="filled">
        <option value="hosted">Hosted</option>
        <option value="joined">Joined</option>
        <option value="open">Open</option>
        <option value="close">Close</option>
      </Select>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} mt={4}>
        <GridItem colSpan={{ base: 12, sm: 7 }}>
          <ContestPaper />
        </GridItem>
        <GridItem colSpan={{ base: 12, sm: 5 }}>
          <Box
            d="flex"
            borderRadius="md"
            height="100%"
            border="1px solid #e2e8f0"
            justifyContent="center"
            alignItems="center"
          >
            Select Something
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OpenContestContent;
