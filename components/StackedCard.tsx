import { Button } from "@chakra-ui/button";
import { Box, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { useMediaQuery } from "@chakra-ui/media-query";
import MotionBox from "./MotionBox";

type StackProps = {
  logo: string;
  donateProvider: string;
  donateContent: string;
  button: string;
  link: string;
  avatarName: string;
};

const StackedCard: React.FC<StackProps> = ({
  donateProvider,
  logo,
  donateContent,
  button,
  avatarName,
  link,
}) => {
  const [smAndUp] = useMediaQuery("(min-width: 450px)");

  return (
    <Stack
      p={4}
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      maxW={{ base: "300px", sm: "450px" }}
      borderWidth="1px"
      my={0}
      mx="auto"
      shadow="sm"
      borderRadius="md"
    >
      <Stack flexDirection="row" w="100%" alignItems="center">
        <Avatar size="md" name={avatarName} src={logo} />
        <Box textAlign="left" style={{ marginTop: 0 }}>
          <Text
            fontSize="15px"
            fontWeight="bold"
            ml={{ base: "12px", sm: "15px" }}
          >
            {" "}
            {donateProvider}{" "}
          </Text>
          <Text
            fontSize={{ base: "10px", sm: "13px" }}
            ml={{ base: "10px", sm: "13px" }}
          >
            {" "}
            {donateContent}{" "}
          </Text>
        </Box>
      </Stack>

      <Spacer />

      <MotionBox
        initial={{ scale: 0 }}
        animate={{
          transform: "translateX(8px)",
          scale: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <Button
          variant="solid"
          as="a"
          href={link}
          colorScheme="brand"
          size={smAndUp ? "sm" : "xs"}
          h={{ base: "30px" }}
          w={{ base: "270px", sm: "100px", md: "100px" }}
        >
          {button}
        </Button>
      </MotionBox>
    </Stack>
  );
};

export default StackedCard;
