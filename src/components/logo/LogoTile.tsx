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
      style={{
        marginRight: "1em",
        height: "167px",
        width: "144px",
        cursor: "pointer"
      }}
    />
  );
};

export default LogoTile;
