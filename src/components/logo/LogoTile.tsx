import React from "react";

interface TileProps {
  tileName: string;
  hoverTileName?: string;
}

const LogoTile: React.FC<TileProps> = props => {
  return (
    <img
      src={require(`../../assets/logo/CCO_${props.tileName}.png`)}
      alt="logo"
      style={{ marginRight: 20 }}
    />
  );
};

export default LogoTile;
