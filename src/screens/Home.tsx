import React from "react";
import Logo from "../components/home";
import Header from "../components/home/Header";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <LogoAndTitleContainer>
        <Logo />
        <TitleContainer>
          <Title>Computer Club Ottensheim</Title>
          <SubTitle>Subheadline Subheadline Subheadline</SubTitle>
        </TitleContainer>
      </LogoAndTitleContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const LogoAndTitleContainer = styled.div`
  display: flex;
  margin-top: 10%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8%;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #008d36;
  text-align: center;
  margin: 0;
  font-family: "Gobold";
`;

const SubTitle = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #999999;
  text-align: center;
  margin: 0;
  font-family: "Gobold";
`;

export default Home;
