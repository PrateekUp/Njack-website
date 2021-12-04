import React from 'react'
// import {Parallax} from 'react-parallax';
import logo from '../Resources/img/njack.svg';
import "./style.css"

const img = "./njackLogo.jpg"


const style = {
    backgroundImage: `url(${require("../Resources/img/back.png").default})`,
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "80%",
    position: "absolute",
    top: "0px",
    zIndex: "-1",
    textAlign: "center",
    color: "white"

}

const BgParallax = () => {
    return (
        
        
            <div style={style}>
                <img className="shadow" src={logo} width="40%" height="70%" style={{marginTop:"80px"}} />
                <p style={{margin:"10px auto", fontSize: "30px",fontFamily:"'Open Sans', sans-serif"}}>Computer Science Club at Indian Institute of Technology, Patna</p>
            </div>
       
    )
}

export default BgParallax
