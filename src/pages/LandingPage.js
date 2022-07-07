import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
} from "@chakra-ui/react";

import Avatar from "react-avatar";
import { getNameInfoName, isUserLogin, logout } from "../web.client";

import { Link as ReachLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Scroll from "../componets/Scroll";
const goTo = (tag) => {
  document.getElementById(tag).scrollIntoView({
    behavior: "smooth",
  });
};
const NavLink = ({ children, tag }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#5E5542", "#5E5542"),
      color: "white",
    }}
    onClick={() => goTo(tag)}
  >
    {children}
  </Link>
);

export default function LandingPage({ Links }) {
  const [isLogged, setLogged] = useState(() => {
    return isUserLogin();
  });
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justify={{ base: "center", md: "start" }}
        >
          <HStack as={"nav"} spacing={4} mr={4}>
            {Links.map((link) => (
              <NavLink key={link.id} tag={link.tag}>
                {link.text}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {!isLogged ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"/login"}
            >
              تسجيل الدخول
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              borderRadius={"1px"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#5E5542"}
              href={"/sginup"}
              _hover={{
                bg: "#5E5542",
              }}
            >
              انشاء حساب
            </Button>
          </Stack>
        ) : (
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  name={getNameInfoName}
                  color="#5E5542"
                  size="40"
                  round={true}
                />
              </MenuButton>
              <MenuList>
                <MenuItem as={ReachLink} to="/profile">
                  بياناتي
                </MenuItem>
                <MenuItem as={"a"} href={"/my-appointment"}>
                  موعيدي
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    logout();
                  }}
                >
                  تسجيل خروج
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
