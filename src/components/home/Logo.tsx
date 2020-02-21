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
  const thirdRow = ["rendering", "Gaming"];
  return (
    <Container>
      <EvenRow>
        {firstRow.map(tile => (
          <Hex tileName={tile} />
        ))}
      </EvenRow>
      <OddRow>
        {secondRow.map(tile => (
          <Hex tileName={tile} />
        ))}
      </OddRow>
      <EvenRow>
        {thirdRow.map(tile => (
          <Hex tileName={tile} />
        ))}
      </EvenRow>
    </Container>
  );
};

const tileWidth = 167;

const Container = styled.div``;

const EvenRow = styled.ol`
  position: relative;
  left: ${tileWidth / 2.1}px;
`;

const OddRow = styled.ol`
  position: relative;
  margin-top: -6.5%;
  margin-bottom: -6.5%;
`;

const Hex = styled(LogoTile)<{ tileName: string }>`
  position: relative;
  margin: 1em auto;
  width: ${tileWidth}px;
  height: ${tileWidth * 1.7}px;

  display: inline-block;
  margin-right: ${tileWidth / 1.3}px;
  transition: all 150ms ease-in-out;
  &:before {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
  }
  &:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Logo;
