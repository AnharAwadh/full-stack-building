import { React, useRef } from "react";

import Header from "../componets/Header";
import LandingPage from "./LandingPage";
import Divder from "../componets/Divder";
import Card from "../componets/Card";
import Serivces from "../componets/Service";
import Team from "../componets/Team";
import { Button } from "@chakra-ui/react";
import {
  AiOutlineArrowUp,
} from "react-icons/fa";
const Homepage = () => {
  const links = [
    {
      id: 1,
      text: "نبذة عنا",
      tag: "app-card",
    },
    {
      id: 2,
      text: "خدماتنا",
      tag: "app-services",
    },
    {
      id: 3,
      text: "فريق العمل",
      tag: "app-team",
    },
  ];


  return (
    <>
      <LandingPage Links={links} />
      <Header />
      <Divder />
      <Card />
      <Serivces />
      <Team/>
      <Button position={"fixed"} color={"red"} >
        ggg
      </Button>
    </>
  );
};

export default Homepage;
