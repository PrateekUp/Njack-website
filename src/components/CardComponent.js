import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button} from 'react-bootstrap';

const CardComponent = (props) => {
    return (
        <div>
            <Card className="my-5" style={{ width: '30em'  , color:"white" , borderRadius: "0px"}} >
                <Card.Img variant="top" src={props.imgUrl} /> 
                <Card.Body style={{padding: "3rem 2rem", backgroundColor: 'rgb(33 37 41)'}}>
                    <Card.Title>Card Title</Card.Title> 
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent
