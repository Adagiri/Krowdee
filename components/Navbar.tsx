import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Spacer, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { chakra } from "@chakra-ui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiGithub } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const Navbar = (): JSX.Element => {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });
  const textDisplay = useBreakpointValue({ base: "none", sm: "block" });
  const router = useRouter();

  return (
    <Box h="8vh" d="flex" alignItems="center" py={{ base: 0, sm: 2 }}>
      <Link href="/">
        <chakra.a display="flex" alignItems="center" cursor="pointer">
          <Image
            boxSize={{ base: "25px", sm: "30px" }}
            objectFit="cover"
            src="./images/krowdee-logo.svg"
            alt="logo"
          />
          <Text
            fontWeight="bold"
            fontSize={{ base: "13px", md: "18px" }}
            ml={{ base: 1, sm: 2 }}
            d={textDisplay}
          >
            Krowdee
          </Text>
        </chakra.a>
      </Link>
      <Spacer />
      <Box>
        <Link href="/about">
          <Button
            borderTop={router.pathname === "/about" ? "2px solid #25b6d6" : ""}
            mr={2}
            size={buttonSize}
            variant="ghost"
            cursor="pointer"
          >
            About
          </Button>
        </Link>
        <Link href="/donate">
          <Button
            borderTop={router.pathname === "/donate" ? "2px solid #25b6d6" : ""}
            mr={2}
            size={buttonSize}
            variant="ghost"
            cursor="pointer"
          >
            Donate
          </Button>
        </Link>

        <Button
          mr={{ base: 1, sm: 2 }}
          size={buttonSize}
          variant="ghost"
          target="blank"
          href="https://github.com/Adagiri/krowdee"
        >
          Report a bug
        </Button>
        <IconButton
          aria-label="github-button"
          size={buttonSize}
          icon={<SiGithub />}
          as="a"
          target="blank"
          href="https://github.com/Adagiri/krowdee/issues"
        />
      </Box>
      <Box ml={2}>
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default Navbar;
