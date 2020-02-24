import React from "react";
import { ReactComponent as Logo } from "../assets/logo/logo.svg";
import { ReactSVG } from "react-svg";


const ClubScreen = () => {
    return (

        <ReactSVG src="logo.svg" beforeInjection={svg => {
            svg.setAttribute("style", "background: orange")
            svg.setAttribute("style", "width: 300px")
        }} />

    )

}

{/* <Logo height="300" width="300">
            <use xlinkHref="CCO_Club" fill="orange" />
        </Logo> */}


export default ClubScreen;