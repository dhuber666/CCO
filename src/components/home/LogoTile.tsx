import React from "react";

interface TileProps {
  tileName: string;
  hoverTileName?: string;
}

const LogoTile: React.FC<TileProps> = props => {
  const getAssetPathFromTileName = (isHovered: boolean = false) => {
    if (props.tileName === "Logo") {
      return require(`../../assets/logo/CCO_${props.tileName}.png`);
    }
    if (!isHovered) {
      return require(`../../assets/logo/CCO_${props.tileName}.png`);
    }

    return require(`../../assets/logo/CCO_${props.tileName}-1.png`);
  };

  return (
    <img
      src={getAssetPathFromTileName()}
      alt="logo"
      onMouseOver={e => (e.currentTarget.src = getAssetPathFromTileName(true))}
      onMouseOut={e => (e.currentTarget.src = getAssetPathFromTileName())}
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
