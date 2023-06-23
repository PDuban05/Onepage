import { AppBar, Select, Toolbar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import styled from "styled-components";

export const StyledAppBar = styled.div`
  && {
    transition: transform 0.3s;
    width: 100%;
    height: 6vh;
    position: fixed;
    background-color: none;
    z-index: 1;

    @media screen and (max-width: 480px) {
    }
  }
`;
export const StyledToolbar = styled(Toolbar)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.navColor};
  backdrop-filter: blur(6px);
`;

export const Content = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ContainerMenu = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 50px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const StyledSelect = styled(Select)`
  && {
    .MuiSelect-select {
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme.textColor1};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }

    .MuiSvgIcon-root {
      fill: ${(props) => props.theme.accent};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }

    &:active .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }
  }
`;
