import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl } from "@chakra-ui/form-control";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Box } from "@chakra-ui/layout";
import React from "react";
import { BiMicrophone, BiSend } from "react-icons/bi";
import ChatBox from "./ChatBox";

const AnnoucementBox = () => {
  return (
    <Box>
      <Box
        w="100%"
        bg={useColorModeValue("gray.50", "gray.800")}
        h="24px"
        textAlign="left"
        zIndex={1}
        mt={-1}
        position="sticky"
        top="-0.9"
      >
        <Badge
          d="flex"
          alignItems="center"
          h="24px"
          top={0}
          px={2}
          borderRadius="4px 3px 3px 0px"
        >
          Annoucement
          <Icon size="24px" ml={1} aria-label="mic" as={BiMicrophone} />
        </Badge>
      </Box>
      <Box
        h="90%"
        css={{
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#edf2f7",
            borderRadius: "24px",
          },
        }}
        overflowY="scroll"
        padding={3}
        fontSize="xs"
        textAlign="left"
      >
        <ChatBox
          sent
          stamp="12 minutes ago"
          name="AbdulAzeez Olamide"
          text="Are you ok Bro"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
        />
        <ChatBox
          sent
          stamp="12 minutes ago"
          name="AbdulAzeez Olamide"
          text="Are you ok Bro"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
        />
        <ChatBox
          stamp="11 minutes ago"
          name="AbdulAzeez Olamide"
          text="I love you bro"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Tanned"
        />
        <ChatBox
          sent
          stamp="12 minutes ago"
          name="AbdulAzeez Olamide"
          text="The Guy said you failed"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
        />
      </Box>

      <Box
        w="100%"
        border="1px solid #718096"
        bg={useColorModeValue("gray.50", "gray.800")}
        zIndex={1}
        h="40px"
        textAlign="left"
        mt={-1}
        position="sticky"
        bottom="0"
      >
        <FormControl>
          <InputGroup size="sm" alignItems="center">
            <Input
              borderRadius="0px 0px 0px 7px"
              size="sm"
              height="40px"
              border="0"
              w="94%"
              outline="0"
              fontSize="xs"
              _focus={{
                outline: 0,
              }}
              placeholder="Type message here..."
            />
            <IconButton
              aria-label="send-icon"
              type="submit"
              variant="ghost"
              size="xs"
              icon={<BiSend size="16px" color="gray.300" />}
            />
          </InputGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AnnoucementBox;
