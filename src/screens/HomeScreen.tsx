import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const HomeScreen = () => {
  return (
    <Grid item md={8} xs={12}>
      <Container>


        <TitleContainer>
          <Title>Computer Club Ottensheim</Title>
          <SubTitle>Subheadline</SubTitle>
        </TitleContainer>

      </Container>
    </Grid>
  );
};

const Container = styled.div`
  
  display: inline-block;
  display: flex;
  align-items: flex-start;
  flex-shrink: 1;
  
`;



const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  
 
`;

const Title = styled.h1`
  font-size: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
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

export default HomeScreen;
