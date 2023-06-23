import React, { useEffect, useState } from "react";
import {
  ContainerPage,
  ContainerSection,
  StyledContainerPage,
} from "./Container";
import { Text5, Text51, Text6, Text7 } from "../../StyledComponent/Text";
import styled from "styled-components";
import { StyledButton3 } from "../../StyledComponent/Button";
import {
  AiFillGithubs2,
  FaReacts,
  FaSasss,
  GrMysqls,
  ImHtmlFive2s,
  SiFigmas,
  SiFirebases,
  SiJavascripts,
  SiMuis,
  SiPhps,
  SiReduxs,
  TbBrandCss3s,
} from "../../StyledComponent/Icon";
import { Grow } from "@mui/material";
import { useSelector } from "react-redux";

const ContainerFlexColumn = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 50px;
  @media screen and (max-width: 768px) {
    gap: 20px;
    justify-content: space-around;
  }
`;
const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
const StyledContainerSection = styled(ContainerSection)`
  @media screen and (max-width: 1920px) {
    height: auto;
  }
`;

const StyledButton31 = styled(StyledButton3)`
  && {
    @media screen and (max-width: 480px) {
      width: 45%;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 30%;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 20%;
    }
  }
`;
const SectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [idioma, setIdioma] = useState();
  const [load, setLoad] = useState(false);
  const currentLanguage = useSelector((state) => state.language.Update);

  useEffect(() => {
    setIdioma(currentLanguage);
    setLoad(true);
  }, [currentLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      const componentElement = document.getElementById("component");
      if (componentElement) {
        const top = window.pageYOffset + window.innerHeight;
        const isVisible = top > componentElement.offsetTop;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar si el componente es visible al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return load ? (
    <StyledContainerSection id="component">
      <Grow in={isVisible} {...(isVisible ? { timeout: 1000 } : {})}>
        <StyledContainerPage>
          <Text6> {idioma.about} </Text6>
          <Text7>
            <br />
            {idioma.aboutText}
            <br />
            <br />
            {idioma.aboutText2}

            <br />
            <br />
          </Text7>
          <Text6> {idioma.aboutText3} </Text6>
          <Text7>
            <br />
            {idioma.aboutText4} <br />
            <br />
          </Text7>

          <ContainerFlexColumn>
            <StyledButton31 icon={ImHtmlFive2s}>
              <ContainerFlex>
                <ImHtmlFive2s />
                <Text51> HTML</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={TbBrandCss3s}>
              <ContainerFlex>
                <TbBrandCss3s />
                <Text51> CSS</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={FaSasss}>
              <ContainerFlex>
                <FaSasss />
                <Text51> SASS</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={SiMuis}>
              <ContainerFlex>
                <SiMuis />
                <Text51> Material UI</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31>
              <ContainerFlex>
                <Text51 style={{ whiteSpace: "nowrap" }}>
                  Styled Components
                </Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={SiJavascripts}>
              <ContainerFlex>
                <SiJavascripts />
                <Text51> JavaScript</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={FaReacts}>
              <ContainerFlex>
                <FaReacts />
                <Text51> React</Text51>
              </ContainerFlex>
            </StyledButton31>
            <StyledButton31 icon={SiReduxs}>
              <ContainerFlex>
                <SiReduxs />
                <Text51>Redux Toolkit</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={SiPhps}>
              <ContainerFlex>
                <SiPhps />
                <Text51> PHP</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={GrMysqls}>
              <ContainerFlex>
                <GrMysqls />
                <Text51> MySql</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={SiFirebases}>
              <ContainerFlex>
                <SiFirebases />
                <Text51> Firebase</Text51>
              </ContainerFlex>
            </StyledButton31>
            <StyledButton31 icon={AiFillGithubs2}>
              <ContainerFlex>
                <AiFillGithubs2 />
                <Text51> Github</Text51>
              </ContainerFlex>
            </StyledButton31>

            <StyledButton31 icon={SiFigmas}>
              <ContainerFlex>
                <SiFigmas />
                <Text51> Figma</Text51>
              </ContainerFlex>
            </StyledButton31>
          </ContainerFlexColumn>
        </StyledContainerPage>
      </Grow>
    </StyledContainerSection>
  ) : null;
};

export default SectionTwo;
