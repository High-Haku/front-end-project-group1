import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookModal(props) {
  const book = props.data;
  const regex = /id=.*/g
  const url = regex.exec(props.data.readlink)[0];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="position-relative">
        <Button
          className="position-absolute"
          variant="light"
          onClick={props.onHide}
          style={{ top: -10, right: -10, borderRadius: "50%", color: "#777" }}
        >
          x
        </Button>
        <Row>
          <Col md="4" className="d-flex no-repeat mt-2 justify-content-center">
            <img src={book.cover} alt="" style={{ objectFit: "contain" }} />
          </Col>
          <Col md="8">
            <h4 className="mb-3">{book.judul}</h4>
            <p className="m-0 my-1">
              <b>Penulis :</b> {book.penulis}
            </p>
            <p className="m-0 my-1">
              <b>Penerbit :</b> {book.penerbit}
            </p>
            <p className="m-0 my-1">
              <b>Terbit :</b> {book.date}
            </p>
            <div>
              <p className="m-0">
                <b>Sinopsis :</b>
              </p>
              <div
                className=""
                style={{
                  maxHeight: "200px",
                  overflow: "auto",
                  fontSize: ".9em",
                }}
              >
                {book.sinopsis}
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          Add to My Library
        </Button>
        <a href={`/book/${url}`}>
          <Button variant="success">Read Now</Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
