import React, { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Divder from "../componets/Divder";
import { useParams, useNavigate } from "react-router-dom";
import { bookAppoint, getAvailableAppoinment } from "../web.client";
import Navbar from "./Navbar";

const Appoint = () => {
  const { userId } = useParams();
  const [dates, setDates] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppoint, setSelectedAppoint] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAvailableAppoinment(userId).then((data) => {
      setDates(_.uniqBy(data, "localDate"));
      setAppointments([...data]);
    });
  }, []);

  return (
    <>
    <Navbar/>
      <Center height={"100vh"} py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} color={"#5E5542"}>
            احجز موعد
          </Heading>
          <br />

          <Text color="#076467" mb="1rem">
            <strong>اختر اليوم:</strong>{" "}
          </Text>

          {!!dates &&
            dates.map((value) => (
              <Button
                m={"1px"}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                color
                onClick={() => setSelectedDate(value)}
                _focus={{
                  bg: "gray.200",
                }}
              >
                <Text color="#076467" fontSize="xl">
                  {value.localDate}
                </Text>
              </Button>
            ))}

          <Divder />

          <Text color="#076467" mb="1rem">
            <strong>اختر الوقت:</strong>{" "}
          </Text>
          {!!selectedDate &&
            _.filter(appointments, function (v) {
              return v.localDate === selectedDate.localDate;
            }).map((value) => (
              <Button
                m={"1px"}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                color
                onClick={() => setSelectedAppoint(value.id)}
                _focus={{
                  bg: "gray.200",
                }}
              >
                <Text color="#076467" fontSize="xl">
                  {value.time}
                </Text>
              </Button>
            ))}
          {!!selectedAppoint && (
            <Box>
              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#076467"}
                  color={"white"}
                  onClick={() =>
                    bookAppoint(selectedAppoint).then((date) => {
                      toast({
                        position: "top",
                        title: "تم",
                        description: "تم حجز الموعد بنجاح",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                      });
                      navigate("/");
                    })
                  }
                  _hover={{
                    bg: "#076467",
                  }}
                >
                  حجز موعد
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Center>
    </>
  );
};

export default Appoint;
