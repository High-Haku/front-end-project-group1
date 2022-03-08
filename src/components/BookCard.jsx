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

      <Card className="mx-2 my-3" style={{minWidth:'140px', maxWidth:'160px', width:'40%', height:'350px'}} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={data.cover} height='100px' />
        <Card.Body className="mb-2" style={{maxHeight:'100px', overflow:'auto'}}>
          {data.judul}
        </Card.Body>
      </Card>
    </>
  );
}

export default BookCard;
