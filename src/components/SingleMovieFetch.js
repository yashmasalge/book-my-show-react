import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function SingleMovieFetch() {
  const [data, setData] = useState([]);
  let { _id } = useParams();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://bms-backend1.herokuapp.com/movies/${_id}`
      );
      console.log(response);
      setData([response.data]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const history = useHistory();

  const erase = () => {
    try {
      const response = axios
        .delete(`https://bms-backend1.herokuapp.com/movies-delete/${_id}`)
        .then(() =>
          Swal.fire({
            title: "<strong>Deleted!!</strong>",
            icon: "success",
            showCloseButton: true,
          })
        )
        .then(() => {
          setData([response.data]);
          console.log(data);
        })
        .catch((err) =>
          Swal.fire({
            title: "<strong>Deleted!!!</strong>",
            icon: "success",
            showCloseButton: true,
          })
        );
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Container fluid style={{ padding: "5%", background: "#D1D1D1" }}>
          <Row style={{ textAlign: "center" }}>
            {data.map((mov) => {
              return (
                <Col
                  id={mov._id}
                  xs={6}
                  md={4}
                  lg={3}
                  style={{ marginBottom: "2%" }}
                >
                  <Card>
                    <Card.Img variant="top" src={mov.imageurl} />
                    <Card.Body>
                      <Card.Title>{mov.title}</Card.Title>
                      <Card.Text>{mov.actor}</Card.Text>
                      <Button onClick={erase} variant="danger">
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SingleMovieFetch;
