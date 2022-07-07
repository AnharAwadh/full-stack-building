import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Card = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      id="app-card"
      alignItems="center"
      w="full"
      px={0}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? "row" : "column"}
    >
      <Flex
        w={isLargerThan62 ? "40%" : "full"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={"https://h.top4top.io/p_2376ywjf12.png"} alt="Chakra UI" />
      </Flex>
      <Spacer />

      <Box mr={isLargerThan62 ? "4" : "0"} w={isLargerThan62 ? "60%" : "full"} >
        <Text
          m={"1rem"}
          fontSize={isLargerThan62 ? "5xl" : "4xl"}
          color={"#5E5542"}
          fontWeight="bold"
          mb="4"
        >
          {" "}
          نبذة عنا
        </Text>

        <Text m={"1rem"} mb="6" fontSize={isLargerThan62 ? "lg" : "base"} opacity={0.7} color={"black"}>
          نجمع لك جميع المهندوسون المحترفين والمقاولين ونوفر لك افضل الخدمات
        </Text>

        <Button
          as={"a"}
          href="/sginup"
          m={"1rem"}
          w="200px"
          colorScheme="#5E5542"
          variant="solid"
          h="50px"
          bg={"#5E5542"}
          _hover={{
            bg: "#5E5542",
          }}
          size={isLargerThan62 ? "lg" : "md"}
          mb={isLargerThan62 ? "0" : "10"}
        >
          انضم معنا
        </Button>
      </Box>
    </Flex>
  );
};

export default Card;
