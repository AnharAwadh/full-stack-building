import React, { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Text,
  useMediaQuery,
  Icon,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FaUserTie, FaStar } from "react-icons/fa";
import Divder from "../componets/Divder";
import { useParams } from "react-router-dom";
import { getpovider } from "../web.client";
import Avatar from "react-avatar";
import Navbar from "../componets/Navbar";

const ServicePage = () => {
  const { provider } = useParams();
  const [providers, setProviders] = useState([]);
  useEffect(function () {
    getpovider(provider).then((data) => {
      setProviders(data);
    });
  }, []);
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

  return (
    <>
    <Navbar/>
    <VStack id="app-services">
      <VStack spacing={4} align="center">
        <Heading as="h1" color={"#5E5542"} mt="2rem" mb="1rem">
          مستـعدين لخـدمتك
        </Heading>
      </VStack>
      <Flex
        minH="75vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        py="16"
        px={isLargerThan48 ? "16" : "6"}
        flexDirection={isLargerThan48 ? "row" : "column"}
      >
        {providers.map((provider) => (
          <>
            <Flex
              height="500px"
              bg="#FFFEFF"
              width={isLargerThan48 ? "32%" : "full"}
              shadow="lg"
              p="6"
              m="3"
              boxShadow={"2xl"}
              rounded={"md"}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
              overflow={"hidden"}
              mb={isLargerThan48 ? "0" : "4"}
              border="1px solid #b0a388"
            >
              <Avatar
                name={provider.firstName}
                color="#5E5542"
                size="80"
                round={true}
              />

              <Text mb="3" color="#5E5542" fontSize="2xl">
                <strong>{provider.firstName + " " + provider.lastName}</strong>
              </Text>
              <Text color="#5E5542" fontSize="xl">
                رقم الجوال: {provider.phonenumber}
              </Text>
              <Text color="#5E5542" fontSize="xl">
                البريد الإلكتروني: {provider.email}
              </Text>

              <ButtonGroup>
                <Button
                  mb="5"
                  mt="2rem"
                  as={"a"}
                  href={"/appointment/" + provider.userId}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#076467"}
                  color={"white"}
                  _hover={{
                    bg: "#076467",
                  }}
                >
                  حجز خدمة
                </Button>
              </ButtonGroup>
            </Flex>

            {/* <Spacer /> */}
          </>
        ))}
      </Flex>
    </VStack>
    </>
  );
};

export default ServicePage;
