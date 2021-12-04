import React from 'react'
import {Parallax} from 'react-parallax';

const img = "./njackLogo.jpg"


const style = {
    backgroundImage: `url(${require("./njackLogo.jpg").default})`,
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "70%",
    position: "absolute",
    top: "0px",
    zIndex: "-1",
    textAlign: "center"

}

const BgParallax = () => {
    return (
        
        
            <div style={style}> </div>
       
    )
}

export default BgParallax
