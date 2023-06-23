import React from "react";
import {
  Container,
  ContainerSection,
} from "../components/componentsPage/HomePage/Container";
import ThemeProvider from "../components/StyledComponent/theme/ThemeProvider";

import NavBar from "../components/componentsPage/NavBar.jsx/NavBar";
import { SectionOne } from "../components/componentsPage/HomePage/SectionOne";
import SectionTwo from "../components/componentsPage/HomePage/SectionTwo";
import SectionThird from "../components/componentsPage/HomePage/SectionThird";
import MenuMobile from "../components/componentsPage/NavBar.jsx/MenuMobile";
import styled from "styled-components";

const HomePage = () => {
  return (
    <ThemeProvider>
      <Container>
        <NavBar />

        <SectionOne />

        <SectionTwo />
        <SectionThird />
        <MenuMobile />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
