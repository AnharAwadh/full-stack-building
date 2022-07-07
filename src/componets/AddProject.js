import React from 'react'
import { Link as ReachLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import Navbar from './Navbar';

function AddProject() {
  return (
    <>
      <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>اسم المشروع: </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel> تفاصيل المشروع: </FormLabel>
              <Textarea type="text" />
            </FormControl>
            <FormControl id="file" isRequired>
              <FormLabel>صورة المشروع: </FormLabel>
              <Input border={"none"} type="file" />
            </FormControl>
            <Stack spacing={5}>
              
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                bg={"#5E5542"}
                color={"white"}
                _hover ={{
                  bg: "#5E5542",
                }}
              >
                إضافة
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
    
  )
}

export default AddProject