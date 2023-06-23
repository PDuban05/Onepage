import { Card, CardActionArea } from "@mui/material";
import styled from "styled-components";

export const ContainerCard = styled(Card)`
  && {
    background: ${(props) => props.theme.backgroundBody};
    border-radius: 15px;
    box-shadow: 7px 13px 37px rgba(0, 0, 0, 0.6);
    margin: 0;
    padding: 0;
    height: 100%;

    @media screen and (max-width: 480px) {
      width: 100%;
      transform: scale(0.8);
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 48%;
      transform: scale(0.9);
    }
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  && {
    margin: 0;
    padding: 0;
  }
`;

export const ContainerCardheader = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    position: absolute;

    border-top: 30px solid transparent;
    border-left: 400px solid ${(props) => props.theme.backgroundBody};
    bottom: 0;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 199px;
  pointer-events: none;
`;

export const ContainerCardBody = styled.div`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
`;

export const ContainerCardIco = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #606a86;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  border: 2px solid #606a86;
`;

export const ContainerCardFooter = styled.div`
  width: 100%;
  height: 80px;
  background: #606a86;
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;

  ::before {
    content: "";
    position: absolute;
    border-bottom: 30px solid transparent;
    border-right: 400px solid ${(props) => props.theme.backgroundBody};
    top: 0;
  }
`;
