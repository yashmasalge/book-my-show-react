import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

function SliderImages() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "300px", width: "300px", margin: "0px 50px" }}
            src="https://wallpapercave.com/wp/wp8444569.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "300px", width: "300px" }}
            src="./logo192.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "300px", width: "300px" }}
            src="./logo192.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
