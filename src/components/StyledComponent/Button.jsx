import { Button } from "@mui/material";
import styled from "styled-components";
import { Text5, Text51 } from "./Text";
import { AiFillGithubs, MdOutlineContactPages } from "./Icon";

export const StyledButton = styled(Button)`
  && {
    width: 192px;
    height: 50px;
    border: 2px solid ${(props) => props.theme.color2};
    border-radius: 6px;
    background: ${(props) => props.theme.color1};
    transition: all 0.5s ease 0s;
    z-index: 0;

    :hover {
      background: ${(props) => props.theme.color4};
      border: 2px solid ${(props) => props.theme.color3};

      ${Text5} {
        color: ${(props) => props.theme.color1};
        font-weight: 800;
      }
      ${AiFillGithubs} {
        color: ${(props) => props.theme.color1};
      }
    }
  }
`;

export const StyledButton2 = styled(StyledButton)`
  && {
    border: 2px solid ${(props) => props.theme.color5};
    background: ${(props) => props.theme.color5};

    :hover {
      border: 2px solid ${(props) => props.theme.color5};

      ${Text5} {
        color: ${(props) => props.theme.color5};
      }
      ${MdOutlineContactPages} {
        color: ${(props) => props.theme.color5};
      }
    }
  }
`;

export const StyledButton3 = styled(StyledButton)`
  && {
    background: ${(props) => props.theme.color4};
    border: 2px solid ${(props) => props.theme.color3};

    :hover {
      background: ${(props) => props.theme.textColor1};

      ${Text51} {
        color: ${(props) => props.theme.textColor3};
      }

      ${(props) => props.icon} {
        color: ${(props) => props.theme.textColor3};
      }
    }
  }
`;
