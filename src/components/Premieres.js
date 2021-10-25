import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import  CardGroup  from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style = {{marginTop : "30px", backgroundColor : "grey", padding:"20px"}}>
        <h2>Premieres</h2>
        <Carousel>
        <Carousel.Item interval={1000}>
        <CardGroup>
        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px", margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

            </CardGroup>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <CardGroup>
        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px", margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

            </CardGroup>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <CardGroup>
        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px", margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style = {{height:"300px" ,width:"300px",margin : "0px 40px"}}>
        <Card.Img src="./img.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>

            </CardGroup>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Premieres;
