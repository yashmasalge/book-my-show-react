import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{ background: "black", color: "white" }}>
      <Container fluid>
        <Row style={{ padding: "1%" }}>
          <Col xs={{ offset: 1, span: 2 }}>List your show</Col>
          <Col xs={4}>
            Got a show, event, activity or a great experience? partner with us &
            get listed on BookMyShow
          </Col>
          <Col xs={5} style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button style={{ background: "rgb(236, 94, 113)" }}>
              Contact Today!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
