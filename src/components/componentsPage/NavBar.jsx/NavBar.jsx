import React, { useEffect, useState } from "react";
import {
  ContainerLogo,
  ContainerMenu,
  Content,
  Img,
  StyledAppBar,
  StyledSelect,
  StyledToolbar,
} from "./Container";
import ThemeSelector from "../../StyledComponent/theme/ThemeSelector";
import { Collapse, MenuItem, Select, Slide } from "@mui/material";
import { Point, StyledLink, TextIco } from "../../StyledComponent/Text";
import MenuMobile from "./MenuMobile";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { StateUpdate } from "../../../features/lenguaje/IdiomaSlice";

const ContainerLink = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [idioma, setIdioma] = useState("Es");
  const [load, setLoad] = useState(false);
  const [language, setLanguage] = useState();
  const currentLanguage = useSelector((state) => state.language.Update);
  const dispatch = useDispatch();

  useEffect(() => {
    setLanguage(currentLanguage);
    setLoad(true);
  }, [currentLanguage]);

  const handleChange = (event) => {
    setIdioma(event.target.value);
  };

  useEffect(() => {
    dispatch(StateUpdate(idioma));
  }, [idioma]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setShowNavbar(scrollPosition > position || position === 0);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToMedium = () => {
    const windowHeight = window.innerHeight - 12;
    window.scrollTo({ top: windowHeight, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = documentHeight - windowHeight;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return load ? (
    <StyledAppBar>
      <Collapse orientation="vertical" in={showNavbar}>
        <StyledToolbar>
          <Slide direction="down" in={showNavbar}>
            <Content>
              <ContainerLogo>
                <TextIco>Ray</TextIco>
                <Point>.</Point>
              </ContainerLogo>

              <ContainerMenu>
                <ContainerLink>
                  <StyledLink onClick={scrollToTop}>{language.home}</StyledLink>
                  <StyledLink onClick={scrollToMedium}>
                    {language.about}
                  </StyledLink>
                  <StyledLink onClick={scrollToBottom}>
                    {language.projects}
                  </StyledLink>
                </ContainerLink>

                <StyledSelect value={idioma} onChange={handleChange}>
                  <MenuItem value="Es">Español</MenuItem>
                  <MenuItem value="En">English</MenuItem>
                </StyledSelect>
                <ThemeSelector />
              </ContainerMenu>
            </Content>
          </Slide>
        </StyledToolbar>
      </Collapse>
    </StyledAppBar>
  ) : null;
};

export default NavBar;
