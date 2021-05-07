import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Badge, Box, Container, Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import {
  RiDashboardLine,
  RiMoonLine,
  RiMoreFill,
  RiPencilLine,
  RiSunLine,
  RiTrophyFill,
  RiUser6Line,
} from "react-icons/ri";

const DashNav = () => {
  const [xsAndUp] = useMediaQuery("(min-width: 330px)");
  const [smAndUp] = useMediaQuery("(min-width: 479px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box w="100%" h={{ base: "7vh", sm: "8vh" }} d="flex" alignItems="center">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Box>
            <Text
              fontSize={{ base: "13px", sm: "inherit" }}
              fontWeight="semibold"
            >
              AbdulAzeez
              <Badge
                ml={1.5}
                variant="solid"
                fontSize={{ base: "smaller", sm: "12px" }}
                borderRadius="md"
                colorScheme="purple"
              >
                Senior
              </Badge>
            </Text>
          </Box>
          <Flex align="center">
            <Button
              variant="ghost"
              colorScheme="brand"
              as={smAndUp ? Button : IconButton}
              size={smAndUp ? "sm" : "xs"}
              px={{ base: 0, sm: "12px" }}
              aria-label={smAndUp ? null : "trophy"}
              icon={
                smAndUp ? null : (
                  <RiTrophyFill size={smAndUp ? "20px" : "18px"} />
                )
              }
              leftIcon={
                smAndUp ? (
                  <RiTrophyFill size={smAndUp ? "20px" : "18px"} />
                ) : null
              }
            >
              {smAndUp ? "Leaderboard" : null}
            </Button>

            <Menu isLazy>
              <MenuButton
                size="xs"
                as={IconButton}
                variant="ghost"
                aria-label="notification-icon"
                mx={{ base: 2, sm: 3 }}
                icon={<IoNotifications size={smAndUp ? "20px" : "18px"} />}
              />
              <MenuList>
                <MenuGroup title="Notifications">
                  <MenuDivider />
                  <MenuItem fontSize="xs">You earned 20 points!</MenuItem>
                  <MenuDivider />
                  <Text
                    fontSize="11px"
                    px="3"
                    color={useColorModeValue("gray.400", "gray.400")}
                  >
                    Notification disappears after 24hrs!
                  </Text>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Menu isLazy>
              <MenuButton
                as={IconButton}
                variant="ghost"
                size="xs"
                aria-label="more-icon"
                icon={<RiMoreFill size={smAndUp ? "20px" : "18px"} />}
              />
              <MenuList>
                <Link href="/app">
                  <MenuItem
                    icon={<RiDashboardLine size="17px" />}
                    fontSize="14px"
                  >
                    Dashboard
                  </MenuItem>
                </Link>
                <Link href="/app/records">
                  <MenuItem icon={<RiPencilLine size="18px" />} fontSize="14px">
                    Records
                  </MenuItem>
                </Link>
                <Link href="/app/me">
                  <MenuItem icon={<RiUser6Line size="18px" />} fontSize="14px">
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem
                  icon={
                    colorMode === "light" ? (
                      <RiMoonLine size="18px" />
                    ) : (
                      <RiSunLine size="18px" />
                    )
                  }
                  fontSize="14px"
                  onClick={toggleColorMode}
                >
                  {" "}
                  {colorMode === "light" ? "Dark Mode" : "Light Mode"}{" "}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default DashNav;
