import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { RiCoinFill } from "react-icons/ri";

type Props = {
  cardName: string;
  cardIcon?: any;
  cardPoint: string;
  hasInnerStack: boolean;
};

const ContestDetailsCard: FC<Props> = ({
  cardName,
  cardIcon,
  cardPoint,
  hasInnerStack,
}) => {
  return (
    <Stack
      textAlign="center"
      borderRadius="md"
      justify="center"
      boxShadow="sm"
      border="1px solid #e2e8f0"
      px={2}
      pt={3}
      pb={2}
    >
      <Flex justify="center">{cardIcon && cardIcon}</Flex>
      {hasInnerStack && (
        <HStack spacing={2} justify="center">
          <HStack spacing={1}>
            <RiCoinFill color="#D4BE37" />
            <Text fontSize="10px">10</Text>
          </HStack>
          <HStack spacing={1}>
            <RiCoinFill color="#C0C0C0" />
            <Text fontSize="10px">5</Text>
          </HStack>
          <HStack spacing={1}>
            <RiCoinFill color="#CD7F32" />
            <Text fontSize="10px">5</Text>
          </HStack>
        </HStack>
      )}
      <Text fontSize="xs">{cardName}</Text>
      <Heading fontSize="large"> {cardPoint} </Heading>
    </Stack>
  );
};

export default ContestDetailsCard;
