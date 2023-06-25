import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  height: auto;
`;

export const ContainerSection = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ContainerPage = styled.div`
  width: 65%;
  height: 100%;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 1440px) {
    width: 90%;
  }
`;

export const StyledContainerPage = styled(ContainerPage)`
  padding: 80px 30px;

  @media screen and (max-width: 768px) {
    padding: 30px 0 0 0;
  }
`;
