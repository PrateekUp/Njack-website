import React from 'react'
import CardComponent from './TeamCard'

const Team = () => {
    return (
        <>
        <h1>Our Team</h1>
        <div className="d-flex flex-wrap justify-content-around">
            <CardComponent imgUrl={`${require("../Resources/img/team1.jpg").default}`} title="Abhishek‌ Chopra" />
            <CardComponent imgUrl={`${require("../Resources/img/team2.jpg").default}`} title="Anmol‌ Chaddha"/>
            <CardComponent imgUrl={`${require("../Resources/img/team3.jpg").default}`} title="Ashwani Yadav"/>
            <CardComponent imgUrl={`${require("../Resources/img/team4.jpg").default}`} title="Amish Mittal"/>
            <CardComponent imgUrl={`${require("../Resources/img/team5.jpg").default}`} title="Nischal Ashok"/>
        </div>
        </>
    )
}

export default Team
