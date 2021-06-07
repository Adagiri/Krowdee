import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl } from "@chakra-ui/form-control";
import { useBoolean } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Box, Grid, GridItem } from "@chakra-ui/layout";
import { BiLock, BiLockOpen, BiMicrophone, BiSend } from "react-icons/bi";
import ChatBox from "./ChatBox";

const SquadSection = (): JSX.Element => {
  const [lock, setLock] = useBoolean();

  return (
    <Grid
      height="80vh"
      gap="1em"
      templateRows="35% 65%"
      templateColumns="repeat(1, 1fr)"
    >
      <GridItem
        overflowY="scroll"
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
      >
        <Box
          w="100%"
          bg={useColorModeValue("gray.50", "gray.800")}
          h="20px"
          textAlign="left"
          zIndex={1}
          mt={-1}
          position="sticky"
          top="-0.9"
        >
          <Badge h="20px" top={0} mt={-1} px={2} borderRadius="4px 3px 3px 0px">
            Annoucement
            <Icon size="23px" ml={1.5} aria-label="mic" as={BiMicrophone} />
          </Badge>
        </Box>
        <Box padding={5} fontSize="xs" textAlign="left">
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
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="I love you bro"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Tanned"
          />
          <ChatBox
            sent
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
        </Box>

        <Box
          w="100%"
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
      </GridItem>

      {/*  */}

      <GridItem
        textAlign="left"
        overflowY="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#edf2f7",
            borderRadius: "24px",
          },
        }}
      >
        <Box
          w="100%"
          bg={useColorModeValue("gray.50", "gray.800")}
          h="20px"
          textAlign="left"
          zIndex={1}
          mt={-1}
          position="sticky"
          top="-0.9"
        >
          <Badge h="20px" top={0} mt={-1} px={2} borderRadius="4px 3px 3px 0px">
            Discussions
            <IconButton
              size="23px"
              on
              ml={1.5}
              onClick={() => setLock.toggle()}
              aria-label="mic"
              icon={lock ? <BiLock size="14px" /> : <BiLockOpen size="14px" />}
            />
          </Badge>
        </Box>

        <Box padding={5} fontSize="xs" textAlign="left">
          <ChatBox
            sent
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
          <ChatBox
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
          <ChatBox
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
          <ChatBox
            sent
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
          <ChatBox
            sent
            stamp="12 minutes ago"
            name="AbdulAzeez Olamide"
            text="djdjd judjjd jdjdjd jd  d didjkdjdjd  d d"
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown'"
          />
        </Box>

        <Box
          w="100%"
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
      </GridItem>
    </Grid>
  );
};

export default SquadSection;
