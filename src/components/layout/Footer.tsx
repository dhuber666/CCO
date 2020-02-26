import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterText>IMPRESSUM | DATENSCHUTZ</FooterText>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  bottom: 40px;
`;
// Make this a <Link> from React Router in Future
const FooterText = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #999999;
  font-family: "Gobold";
  cursor: pointer;
`;

export default Footer;
