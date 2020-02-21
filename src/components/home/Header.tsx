import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <HeaderText>IMPRESSUM | DATENSCHUTZ</HeaderText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  top: 0;
`;
// Make this a <Link> from React Router in Future
const HeaderText = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #999999;
  font-family: "Gobold";
  cursor: pointer;
`;

export default Header;
