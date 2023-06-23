import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import {
  AiOutlineHome4,
  BiBriefcaseAlt24,
  MdPerson4,
} from "../../StyledComponent/Icon";
import { Text52 } from "../../StyledComponent/Text";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MenuMobile = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

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
    const scrollPosition = documentHeight - windowHeight - 250;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };
  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);
  return (
    <StyledBox sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={7}
        style={{ backdropFilter: "blur(1px)" }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={<Text52>Inicio</Text52>}
            icon={<AiOutlineHome4 />}
            onClick={scrollToTop}
          />
          <BottomNavigationAction
            label={<Text52>Sobre Mi</Text52>}
            icon={<MdPerson4 />}
            onClick={scrollToMedium}
          />
          <BottomNavigationAction
            label={<Text52>Proyectos</Text52>}
            icon={<BiBriefcaseAlt24 />}
            onClick={scrollToBottom}
          />
        </BottomNavigation>
      </Paper>
    </StyledBox>
  );
};

export default MenuMobile;
