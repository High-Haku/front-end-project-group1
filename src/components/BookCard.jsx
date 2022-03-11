import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/card.css"
import BookModal from './BookModal'

function BookCard({data}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <BookModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />

      <Card className="my-3 mx-2 p-0" style={{maxWidth:'15%',minWidth:'140px',  width:'100%'}} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={data.cover} style={{maxHeight:'250px'}} />
        <Card.Body className="mb-2" style={{height:'150px', overflow:'hidden'}}>
          {data.judul}
        </Card.Body>
      </Card>
    </>
  );
}

export default BookCard;
