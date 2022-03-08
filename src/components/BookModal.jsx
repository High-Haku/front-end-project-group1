import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookToMyLibrary } from "../redux/actions/userAction";

function BookModal(props) {
  const book = props.data;
  const regex = /id=.*/g;
  const url = regex.exec(props.data.readlink)[0];
  const dispatch = useDispatch();

  function addToMyLibrary() {
    dispatch(addBookToMyLibrary());
    //props.onHide();
  }

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
          <Col md="4" className="d-flex no-repeat mt-2 justify-content-center position-relative">
            <img src={book.cover} alt="" style={{ objectFit: "contain" }} />
          </Col>
          <Col md="8">
            <h4 className="mb-3">{book.judul} <div className="ms-2 text-light p-1 fw-bold d-inline-block bg-danger" style={{fontSize:'15px'}}>{book.price ? `Rp. ${book.price}` : "Out of Stock"}</div></h4>
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
                <b>Deskripsi :</b>
              </p>
              <div
                className=""
                style={{
                  maxHeight: "200px",
                  overflow: "auto",
                  fontSize: ".9em",
                }}
              >
                {book.deskripsi}
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
      {book.price ? (
        <Button variant='outline-success' className="d-flex align-items-center"><img src={require('../images/icons/add-to-cart.png')} width='28px' alt="add to cart" /><span className="ms-2 fw-bold">Add to Cart</span></Button>
      ) : <div></div>}
        <div className="button-container d-flex">
          <Button className="me-2" variant="success" onClick={addToMyLibrary}>
            Add to My Library
          </Button>
          <a href={`/book/${url}`}>
            <Button variant="success">Read Now</Button>
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
