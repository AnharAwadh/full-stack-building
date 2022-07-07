import React from 'react'
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
} from "@chakra-ui/react";

import Avatar from "react-avatar";
import { Link as ReachLink } from "react-router-dom";


const Navbar = () => {
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
       
        <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/"}
          >
            الصفحة الرئيسة
          </Button>

       
      </Flex>
    
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar name="Anhar" color="#5E5542" size="40" round={true} />
            </MenuButton>
            <MenuList>
              <MenuItem as={ReachLink} to="/profile">
                بياناتي
              </MenuItem>
              <MenuItem 
                as={"a"}
                href={'/my-appointment'}
              >
                موعيدي
              </MenuItem>
             
              <MenuItem>تسجيل خروج</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
    </Flex>
  </Box>
  )
}

export default Navbar