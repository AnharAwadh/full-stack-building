import { React, useState } from "react";
import { login } from "../web.client";

import { Link as ReachLink, useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const toast = useToast();

  return (
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
            <FormControl id="email">
              <FormLabel>البريد الألكتروني</FormLabel>
              <Input
                onChange={(event) => setUsername(event.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>كملة السر</FormLabel>
              <Input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"black"}>هل نسيت كلمة المرور؟</Link>
                <Link as={ReachLink} to="/sginup" color={"#5E5542"}>
                  إنشاء حساب جديد
                </Link>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                bg={"#5E5542"}
                color={"white"}
                _hover={{
                  bg: "#5E5542",
                }}
                onClick={() => {
                  login({ username, password }).then((response) => {
                    if (response == 200) {
                      toast({
                        position: "top",
                        title: "تم",
                        description: "تم التسجيل الدخول بنجاح",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                      });
                      navigate("/");
                    }
                  });
                }}
              >
                تسجيل الدخول
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
