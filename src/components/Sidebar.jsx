import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

function Sidebar({ fetchData, setCategory, reset }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories = [
    "Adventure",
    "Biography",
    "Computers",
    "Comedy",
    "Fantasy",
    "Fiction",
    "History",
    "Horror",
    "Humor",
    "Music",
    "Mystery",
    "Nature",
    "Occult",
    "Philosophy",
    "Politics",
    "Psychology",
    "Religion",
    "Romance",
    "Science",
    "Thriller"
  ];

  function handleClick(element) {
    setCategory(element.textContent);
    fetchData("", element.textContent);
    handleClose();
    reset();
  }

  return (
    <>
      <div
        className="bg-success position-fixed top-0"
        style={{ width: "3px", height: "100vh", zIndex: 10 }}
      >
        <Button
          className="position-fixed pb-4"
          variant="success"
          onClick={handleShow}
          style={{
            zIndex: 10,
            transform: "rotate(90deg)",
            top: 100,
            left: -50,
          }}
        >
          Categories
        </Button>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ borderRight: "3px solid #157347", maxWidth: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0 m-0">
          <ul className="list-group">
            {categories.map((c, i) => {
              return <li
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClick(e.target)}
                key={i}
              >
                {c}
              </li>;
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
