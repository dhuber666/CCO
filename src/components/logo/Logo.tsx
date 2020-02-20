import React from "react";
import LogoTile from "./LogoTile";
import styled from "styled-components";

const Logo = () => {
  const tileNames = [
    "Club",
    "Club-1",
    "Gaming",
    "Gaming-1",
    "Logo",
    "rendering",
    "rendering-2",
    "cloud",
    "cloud-2",
    "members",
    "members-1",
    "security",
    "security-2"
  ];

  const firstRow = ["Club", "members"];
  const secondRow = ["security", "Logo", "cloud"];
  return (
    <LogoContainer>
      <FirstRow>
        {firstRow.map(tileName => (
          <LogoTile tileName={tileName} />
        ))}
      </FirstRow>
      <SecondRow>
        {secondRow.map(tileName => (
          <LogoTile tileName={tileName} />
        ))}
      </SecondRow>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 710px;
  margin-left: 50px;
`;

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: -38.5px;
`;

const SecondRow = styled.div`
  width: 100%;
  display: flex;
`;

export default Logo;
