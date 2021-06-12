import { Avatar } from "@chakra-ui/avatar";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineUser } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";

type LeaderBoxProps = {
  name: string;
  score: number;
  index: number;
};

const LeaderBox = ({ name, score, index }: LeaderBoxProps) => {
  const position = index + 1;
  const firstBarHeight = "75%";
  const secondBarHeight = "60%";
  const thirdBarHeight = "50%";

  return (
    <Flex
      position="relative"
      width="100%"
      h="100%"
      flexDir="column"
      order={position === 2 && -1}
      justify="center"
      align="center"
    >
      <Flex
        w="100%"
        h={
          position === 1
            ? firstBarHeight
            : position === 2
            ? secondBarHeight
            : position === 3
            ? thirdBarHeight
            : null
        }
        bgGradient={
          position === 1
            ? "linear(to-b,  #4E54C8, #8F94FB)"
            : position === 2
            ? "linear(to-b, #AD5389, #3C1053)"
            : position === 3
            ? "linear(to-b, #0987A0, #054450)"
            : null
        }
        flexDirection="column"
        position="absolute"
        bottom={0}
        py={5}
      >
        <VStack
          spacing={1}
          position="absolute"
          top={-50}
          transform={position === 1 ? "translateY(-62%)" : "translateY(-50%)"}
          alignSelf="center"
        >
          {position === 1 && <FaCrown size={25} />}
          <Avatar icon={<AiOutlineUser />} />
          <Text textTransform="capitalize">{name}</Text>
        </VStack>
        <Heading
          align="center"
          fontSize={
            position === 1
              ? 50
              : position === 2
              ? 45
              : position === 3
              ? 40
              : null
          }
          fontFamily="sora"
          color="whiteAlpha.900"
        >
          {position}
        </Heading>
        <Text
          align="center"
          mt="auto"
          fontSize="lg"
          fontWeight="extrabold"
          fontFamily="sora"
          color="whiteAlpha.900"
        >
          {score}
        </Text>
      </Flex>
    </Flex>
  );
};

export default LeaderBox;
