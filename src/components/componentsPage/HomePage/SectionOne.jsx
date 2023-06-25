import React, { useEffect, useState } from "react";
import { ContainerPage, ContainerSection } from "./Container";
import styled from "styled-components";
import { Text1, Text2, Text3, Text4, Text5 } from "../../StyledComponent/Text";
import { StyledButton, StyledButton2 } from "../../StyledComponent/Button";
import {
  AiFillGithubs,
  MdOutlineContactPages,
} from "../../StyledComponent/Icon";
import { Grow } from "@mui/material";
import { useSelector } from "react-redux";

const ContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerFlex = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 0 0;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
  }
`;

const ContainerFlex2 = styled(ContainerFlex)`
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

const StyledContainerSection = styled(ContainerSection)`
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  filter: brightness(0.5);
  object-fit: cover;
  position: absolute;
  z-index: -1;
  display: ${(props) => props.theme.active};

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

const StyledButton1 = styled(StyledButton)`
  && {
    @media screen and (max-width: 480px) {
      width: 90%;
    }
  }
`;

const StyledButton21 = styled(StyledButton2)`
  && {
    @media screen and (max-width: 480px) {
      width: 90%;
    }
  }
`;
const createStyledText = (TextComponent) => styled(TextComponent)`
  && {
    text-align: center;
  }
`;
const Styleda = styled.a`
  width: 100%;
  height: 100%;
`;

const StyledText1 = createStyledText(Text1);
const StyledText2 = createStyledText(Text2);
const StyledText3 = createStyledText(Text3);
const StyledText4 = createStyledText(Text4);

export const SectionOne = () => {
  const [idioma, setIdioma] = useState();
  const [load, setLoad] = useState(false);

  const currentLanguage = useSelector((state) => state.language.Update);

  useEffect(() => {
    setIdioma(currentLanguage);
    setLoad(true);
  }, [currentLanguage]);

  return load ? (
    <StyledContainerSection>
      <Img src="https://firebasestorage.googleapis.com/v0/b/tienda-e-commerce-55251.appspot.com/o/pexels-lynde-9794458.jpg?alt=media&token=7d43612a-272d-4e7f-9704-bc7ee5d85aa0" />
      <Grow in>
        <ContainerPage>
          <ContainerText>
            <StyledText1> {idioma.welcomeMessage} </StyledText1>
            <StyledText2>Pedro Moreno</StyledText2>
            <StyledText3>{idioma.developer} Front-End</StyledText3>
            <StyledText4>{idioma.phrase}</StyledText4>

            <ContainerFlex>
              <StyledButton1>
                <Styleda target="_blank" href="https://github.com/PDuban05">
                  <ContainerFlex2>
                    <AiFillGithubs />
                    <Text5> Github</Text5>
                  </ContainerFlex2>
                </Styleda>
              </StyledButton1>

              <StyledButton21>
                <Styleda
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/tienda-e-commerce-55251.appspot.com/o/Proyects%2FPedroDubanMoreno.pdf?alt=media&token=eed8529c-1115-49d0-8f32-8e4fd64f4029"
                >
                  <ContainerFlex2>
                    <MdOutlineContactPages />
                    <Text5> Descargar CV</Text5>
                  </ContainerFlex2>
                </Styleda>
              </StyledButton21>
            </ContainerFlex>
          </ContainerText>
        </ContainerPage>
      </Grow>
    </StyledContainerSection>
  ) : null;
};
