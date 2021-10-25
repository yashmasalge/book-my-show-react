import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";

function SingleMovieFetch() {
    const [data, setData] = useState([]);
    let {_id} = useParams();

    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/movies/${_id}`);
            console.log(response);
            setData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
           <div>
           <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                {data.map((mov) =>{
                        return(
                            <Col id={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src={mov.imageurl} />
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                               {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                        )
                }  
                )}
                </Row>
            </Container>
        </div>
        </div>
    );
}

export default SingleMovieFetch;