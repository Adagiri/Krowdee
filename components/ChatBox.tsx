import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";

type ChatMessageProps = {
  sent?: boolean;
  name: string;
  avatar: string;
  text: string;
  stamp?: string;
};

const ChatBox = ({
  avatar,
  name,
  sent,
  text,
  stamp,
}: ChatMessageProps): JSX.Element => {
  return (
    <Box my={3}>
      <Text
        fontSize="9px"
        fontWeight="medium"
        textAlign={sent ? "right" : "left"}
        mr={sent ? "34px" : null}
      >
        {name}{" "}
      </Text>
      <Box
        d="flex"
        justifyContent={sent ? "flex-end" : "flex-start"}
        alignItems="center"
        gridGap="0.8em"
      >
        <Box
          px={1.5}
          py={1}
          borderRadius="7px"
          bg={
            sent
              ? useColorModeValue("#A0AEC0", "#2D3748")
              : useColorModeValue("#E2E8F0", "#718096")
          }
        >
          <Text fontSize="11.5px" fontWeight="medium">
            {" "}
            {text}{" "}
          </Text>
        </Box>
        <Avatar size="xs" name={name} src={avatar} />
      </Box>
      <Text
        fontSize="9px"
        mr={sent ? "34px" : null}
        textAlign={sent ? "right" : "left"}
      >
        {stamp}{" "}
      </Text>
    </Box>
  );
};

export default ChatBox;
