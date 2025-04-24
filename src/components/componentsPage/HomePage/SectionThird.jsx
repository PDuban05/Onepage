import React, { useEffect, useState } from "react";
import { ContainerSection, StyledContainerPage } from "./Container";
import { Text6, Text7, Text71 } from "../../StyledComponent/Text";
import {
  CardImg,
  ContainerCard,
  ContainerCardBody,
  ContainerCardFooter,
  ContainerCardIco,
  ContainerCardheader,
  StyledCardActionArea,
} from "./Card";
import styled from "styled-components";
import {
  FaReact3,
  FaSass3,
  ImHtmlFive23,
  SiFirebase3,
  SiJavascript3,
  SiMui3,
  Siphp3,
  SiStyledcomponents3,
  TbBrandRedux3,
} from "../../StyledComponent/Icon";
import { CardActionArea, Grow, Zoom } from "@mui/material";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const ContainerFlex2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;

const StyledContainerSection = styled(ContainerSection)`
position: relative;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const SectionThird = () => {
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
      const top = window.pageYOffset + window.innerHeight;
      const component = document.getElementById("component2");
      const isVisible = component && top > component.offsetTop;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar si el componente es visible al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return load ? (
    <StyledContainerSection id="component2">

    
      <StyledContainerPage>
        <Text6> {idioma.projectsText} </Text6>
        <Text7>
          <br />
          {idioma.projectsText1}
          <br />
          <br />
        </Text7>

        <Zoom in={isVisible} {...(isVisible ? { timeout: 500 } : {})}>
          <ContainerFlex2>
            <ContainerCard>
              <StyledCardActionArea>
                <ContainerCardheader>
                  <CardImg src="https://firebasestorage.googleapis.com/v0/b/tienda-e-commerce-55251.appspot.com/o/Proyects%2FCaptura%20de%20pantalla%202023-06-21%20104026.png?alt=media&token=1656cc26-d07f-4836-8583-ef7cbb528b87" />
                </ContainerCardheader>

                <ContainerCardBody>
                  <Text6>MarkWall</Text6>
                  <Text7>{idioma.markwall} </Text7>

                  <ContainerFlex>
                    <ContainerCardIco>
                      <FaReact3 />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <TbBrandRedux3 />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <SiStyledcomponents3 />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <SiMui3 style={{ transform: "scale(0.8)" }} />
                    </ContainerCardIco>

                    <ContainerCardIco>
                      <SiFirebase3 style={{ transform: "scale(0.8)" }} />
                    </ContainerCardIco>
                  </ContainerFlex>
                </ContainerCardBody>
                <ContainerCardFooter>
                  <a href="https://markwall.netlify.app/#/" target="_blank">
                    <Text71> Demo</Text71>
                  </a>
                </ContainerCardFooter>
              </StyledCardActionArea>
            </ContainerCard>

            <ContainerCard>
              <StyledCardActionArea>
                <ContainerCardheader>
                  <CardImg src="https://firebasestorage.googleapis.com/v0/b/tienda-e-commerce-55251.appspot.com/o/Proyects%2FCaptura%20de%20pantalla%202023-06-21%20150752.png?alt=media&token=02f6dcec-55b5-48af-94fb-133bf9d9bed8" />
                </ContainerCardheader>
                <ContainerCardBody>
                  <Text6>{idioma.calculator}</Text6>
                  <Text7> {idioma.calculatorText} </Text7>

                  <ContainerFlex>
                    <ContainerCardIco>
                      <ImHtmlFive23 />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <SiJavascript3 style={{ transform: "scale(0.8)" }} />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <FaSass3 />
                    </ContainerCardIco>
                  </ContainerFlex>
                </ContainerCardBody>
                <ContainerCardFooter>
                  <a
                    href="https://calculadoradefisica.online/index.html"
                    target="_blank"
                  >
                    <Text71> Demo</Text71>
                  </a>
                </ContainerCardFooter>
              </StyledCardActionArea>
            </ContainerCard>

            <ContainerCard>
              <StyledCardActionArea>
                <ContainerCardheader>
                  <CardImg src="https://firebasestorage.googleapis.com/v0/b/prueba-4dd37.appspot.com/o/PortadaEcoyuma.webp?alt=media&token=26bfe67f-7ef5-4636-80ab-681699e2d3dd" />
                </ContainerCardheader>

                <ContainerCardBody>
                  <Text6>{idioma.ecoyuma}</Text6>
                  <Text7> {idioma.ecoyumaText} </Text7>

                  <ContainerFlex>
                    <ContainerCardIco>
                      <ImHtmlFive23 />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <SiJavascript3 style={{ transform: "scale(0.8)" }} />
                    </ContainerCardIco>
                    <ContainerCardIco>
                      <Siphp3 />
                    </ContainerCardIco>



                  </ContainerFlex>
                </ContainerCardBody>
                <ContainerCardFooter>
                  <a
                    href="https://tienda.ecoyuma.com.co/"
                    target="_blank"
                  >
                    <Text71> Demo</Text71>
                  </a>
                </ContainerCardFooter>
              </StyledCardActionArea>
            </ContainerCard>
          </ContainerFlex2>
        </Zoom>

      </StyledContainerPage>
      <Footer/>
    </StyledContainerSection>
  ) : null;
};
export default SectionThird;
