import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <div className="headNav">
      <Navbar
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#333545", padding: "0.4%" }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "whitesmoke" }}>
            Book My Show
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  id="navBarSearchForm"
                  type="search"
                  placeholder="Search for Movies ,Events, Plays, Sports and Activities"
                  className="me-3 lg"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <NavDropdown
              style={{ color: "whitesmoke" }}
              title="Mumbai"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
              <NavDropdown.Item href="/registration">
                Register Your Movie
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Button variant="danger" size="sm">
                Sign in
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ backgroundColor: "#1F2533" }}>
        <Container
          style={{
            backgroundColor: "#1F2533",
            color: "white",
            padding: "0.4%",
          }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Movies
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Streams
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Plays
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Sports
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Activities
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/" style={{ color: "unset", textDecoration: "unset" }}>
                Buzz
              </a>
            </div>
            <a
              href="/registration"
              style={{ color: "unset", textDecoration: "unset" }}
            >
              ListYourShow
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
