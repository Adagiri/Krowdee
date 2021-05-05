import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
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
import Link from "next/link";
import { GiTrophyCup } from "react-icons/gi";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { RiMoreFill } from "react-icons/ri";

const DashNav = () => {
  const [xsAndUp] = useMediaQuery("(min-width: 330px)");
  const [smAndUp] = useMediaQuery("(min-width: 479px)");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="100%" h={{ base: "7vh", sm: "8vh" }} d="flex" alignItems="center">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Box>
            <Text
              fontSize={{ base: "16px", sm: "inherit" }}
              fontWeight="semibold"
            >
              AbdulAzeez
              <Badge
                ml={1.5}
                variant="solid"
                borderRadius="md"
                colorScheme="purple"
              >
                Senior
              </Badge>
            </Text>
          </Box>
          <Flex align="center">
            {smAndUp ? (
              <Button
                variant="ghost"
                colorScheme="brand"
                size="sm"
                leftIcon={<GiTrophyCup size="18px" />}
              >
                Leaderboard
              </Button>
            ) : (
              <IconButton
                size="xs"
                variant="ghost"
                aria-label="more-icon"
                icon={<GiTrophyCup size="16px" />}
              />
            )}
            {/* <Avatar
              mx={{ base: "8px", md: "12px" }}
              size="xs"
              src="../public/images/profile.jpg"
            /> */}
            <Menu isLazy>
              <MenuButton
                size="xs"
                as={IconButton}
                variant="ghost"
                aria-label="notification-icon"
                mx={3}
                icon={<IoNotifications size="20px" />}
              />
              <MenuList>
                <MenuGroup title="Notifications">
                  <MenuDivider />
                  <MenuItem fontSize="xs">You earned 20 points!</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Menu isLazy>
              <MenuButton
                as={IconButton}
                variant="ghost"
                size="xs"
                aria-label="more-icon"
                icon={<RiMoreFill size="20px" />}
              />
              <MenuList>
                <Link href="/app">
                  <MenuItem fontSize="14px">Dashboard</MenuItem>
                </Link>
                <Link href="/app/records">
                  <MenuItem fontSize="14px">Records</MenuItem>
                </Link>
                <Link href="/app/me">
                  <MenuItem fontSize="14px">Profile</MenuItem>
                </Link>
                <MenuItem fontSize="14px" onClick={toggleColorMode}>
                  {" "}
                  {colorMode === "dark" ? "Light Mode" : "Dark Mode"}{" "}
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
