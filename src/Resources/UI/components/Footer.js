import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__body'>
                <div className=''>
                    <img src='https://scontent.fidr4-2.fna.fbcdn.net/v/t1.6435-9/51745036_2209486759072164_9160398577820762112_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8iMGVPRuhNgAX8hC-oO&tn=Dh3McDadJP6EjA3Y&_nc_ht=scontent.fidr4-2.fna&oh=2f0cf2a0147f2e34eaadbff51383067f&oe=61D375B9' />
                </div>
                <div className=''>
                    <a href=" "><LinkIcon/> LINK 1</a>
                    <a href=" "><LinkIcon/> LINK 1</a>
                    <a href=" "><LinkIcon/> LINK 1</a>
                    <a href=" "><LinkIcon/> LINK 1</a>
                </div>
                <div className=''>
                    <a href=" "><LinkIcon/> LINK 2</a>
                    <a href=" "><LinkIcon/> LINK 2</a>
                    <a href=" "><LinkIcon/> LINK 2</a>
                    <a href=" "><LinkIcon/> LINK 2</a>
                </div>
                <div className=''>
                    <a href=" "><LinkIcon/> LINK 3</a>
                    <a href=" "><LinkIcon/> LINK 3</a>
                    <a href=" "><LinkIcon/> LINK 3</a>
                    <a href=" "><LinkIcon/> LINK 3</a>
                </div>
            </div>
            <div className='footer__icon'>
                <a href='/'><FacebookIcon fontSize='large' style={{ padding: "10px", padding: "0 20px", color: "white" }} /> </a>
                <a href='/'><LinkedInIcon fontSize='large' style={{ padding: "10px", padding: "0 20px", color: "white" }} /> </a>
                <a href='/'><InstagramIcon fontSize='large' style={{ padding: "10px", padding: "0 20px", color: "white" }} /> </a>
                <a href='/'><RedditIcon fontSize='large' style={{ padding: "10px", padding: "0 20px", color: "white" }} /> </a>
                <a href='/'><GitHubIcon fontSize='large' style={{ padding: "10px", padding: "0 20px", color: "white" }} /> </a>
            </div>
            <div className='footer__foot'>
                <div className=''>
                    <p>@ 2020 NJACK-Website</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
