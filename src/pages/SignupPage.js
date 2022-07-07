import React from "react";
import { login, register } from "../web.client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { RadioCard } from "../componets/radio-card";

const SignupPage = () => {
  const options = [
    { role: "USER", label: "عميل" },
    { role: "contractor", label: "مقاول" },
    { role: "Architect", label: "مهندس" },
    { role: "Interiordesigner", label: "تصميم داخلي" },
    { role: "supervisor", label: "مشرف" },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [phonenumber, setphoneNumber] = useState();
  const [role, setRole] = useState("USER");
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "userType",
    defaultValue: "عميل",
    onChange: (value) => {
      for (const option of options) {
        if (option.label === value) {
          setRole(option.role);
          break;
        }
      }
    },
  });
  const group = getRootProps();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"100%"} py={12} px={[0, 0, 6]}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack align={"center"} justify={"center"} {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value: value.label });
                return (
                  <RadioCard key={value.label} {...radio}>
                    {value.label}
                  </RadioCard>
                );
              })}
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>الأسم الاول</FormLabel>
                  <Input
                    type="text"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>الأسم الأخير</FormLabel>
                  <Input
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>البريد الألكتروني</FormLabel>
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>رقم الجوال</FormLabel>
              <Input
                type="number"
                onChange={(event) => setphoneNumber(event.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#5E5542"}
                color={"white"}
                _hover={{
                  bg: "#5E5542",
                }}
                onClick={() => {
                  register({
                    firstName,
                    lastName,
                    phonenumber,
                    role,
                    email,
                    password,
                  }).then((response) => {
                    if (response === 201) {
                      login({ username: email, password }).then((code) => {
                        if (code === 200) {
                          navigate("/");
                        }
                      });
                    }
                  });
                }}
              >
                تسجيل
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                لديك حساب بالفعل؟{" "}
                <Link as={ReachLink} to="/login" color={"#05E5542"}>
                  تسجيل الدخول
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupPage;
