import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      px={0}
      backgroundImage={"url(https://g.top4top.io/p_2376lsm1h1.png)"}
      backgroundSize={"contain" }
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center  center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Stack direction={"row"}></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Header;
