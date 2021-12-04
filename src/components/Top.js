import React from 'react'
import icon from '..Resources/img/top.png'


export default function Top () {
    
    const top=()=>{
        window.scrollTo(0, 0);
    }
        return (
            <div style={{backgroundImage:`url(${icon})`, width:'68px', height:'68px', right:0, bottom:0, position:'fixed',cursor:'pointer',backgroundSize:'cover',marginRight:'1px'}} onClick={top}>
           
                
            </div>
        )
    
}


