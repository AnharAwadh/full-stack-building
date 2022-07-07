import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as ReachLink } from "react-router-dom";
import Avatar from "react-avatar";
import { getUserInfo } from "../web.client";
import { updateUser } from "../web.client";

const Profile = () => {
  const toast = useToast();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phonenumber, setphoneNumber] = useState();
  useEffect(function () {
    getUserInfo().then((userInfo) => {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setphoneNumber(userInfo.phonenumber);
    });
  }, []);
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
          <Flex
            alignItems="center"
            minWidth="max-content"
            justifyContent="center"
          >
            <Box mt="-4rem" mb="2rem">
              <Avatar name="Anhar" color="#5E5542" size="70" round={true} />
            </Box>
          </Flex>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>الأسم الاول</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>الأسم الأخير</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="mobile" isRequired>
              <FormLabel>رقم الجوال</FormLabel>
              <Input
                type="number"
                value={phonenumber}
                onChange={(event) => setphoneNumber(event.target.value)}
              />
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
                onClick={() =>
                  updateUser({ firstName, lastName, phonenumber }).then(
                    (code) => {
                      if (code === 200) {
                        toast({
                          position: "top",
                          title: "تم التعديل",
                          description: "تم التعديل بنجاح",
                          status: "success",
                          duration: 4000,
                          isClosable: true,
                        });
                      }
                    }
                  )
                }
              >
                حفظ التعديلات
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Profile;
