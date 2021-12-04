import React from 'react'
import CardComponent from './CardComponent';
import Jumbotron from './Jumbotron';

const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(255 255 255)' }}>
                {/* <Carousel /> */}
                <div className="d-flex flex-wrap justify-content-around">
                    <CardComponent imgUrl={`${require("../Resources/img/events-min.jpg").default}`} />
                    <CardComponent imgUrl={`${require("../Resources/img/exceptional-team.png").default}`} />
                    <CardComponent imgUrl={`${require("../Resources/img/nwoc-min.jpg").default}`} />
                </div>
            </div>
            <Jumbotron/>
        </div>
    )
}

export default Home
