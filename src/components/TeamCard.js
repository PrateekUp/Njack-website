import React from 'react'
import Card from 'react-bootstrap/Card'

const CardComponent = (props) => {
    return (
        <div>
            <Card className="my-5" style={{ width: '30em'  , color:"black" , borderRadius: "0px"}} >
                <Card.Img variant="top" src={props.imgUrl} /> 
                <Card.Body style={{padding: "3rem 2rem", backgroundColor: 'rgb(162 167 172)'}}>
                    <Card.Title style={{fontSize:'40px'}}>{props.title}</Card.Title> 
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <img className="mx-1" src={`${require("../Resources/img/git.png").default}`} width="30px" height="30px" style={{cursor: "pointer"}}></img>
                    <img className="mx-1" src={`${require("../Resources/img/fb.png").default}`} width="30px" height="30px" style={{cursor: "pointer", borderRadius:"50%"}}></img>
                    <img className="mx-1" src={`${require("../Resources/img/lnkin.png").default}`} width="30px" height="30px" style={{cursor: "pointer"}}></img>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent
