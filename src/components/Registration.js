import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [actor, setActor] = useState("");

  function InputClear() {
    setImage("");
    setTitle("");
    setActor("");
  }

  function addMovies() {
    const movieDetails = {
      newMovie: {
        imageurl: image,
        title: title,
        actor: actor,
      },
    };
    // console.log(movieDetails)
    const response = axios
      .post(
        "https://bms-backend-7x9p.onrender.com/movie-register",
        movieDetails
      )
      .then(() =>
        Swal.fire({
          title: "<strong>Submitted!!</strong>",
          icon: "success",
          showCloseButton: true,
        })
      )
      .then(() => InputClear())
      .catch((err) =>
        Swal.fire({
          title: "<strong>Submitted!!</strong>",
          icon: "success",
          showCloseButton: true,
        })
      );
    // console.log(response);
  }
  return (
    <div>
      <Container style={{ padding: "10%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicImageurl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              placeholder="Enter Movie image url"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter Movie Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicActor">
            <Form.Label>Movie Actor</Form.Label>
            <Form.Control
              value={actor}
              onChange={(e) => {
                setActor(e.target.value);
              }}
              type="text"
              placeholder="Enter Movie Actor"
            />
          </Form.Group>
          <Button variant="primary" onClick={addMovies}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
