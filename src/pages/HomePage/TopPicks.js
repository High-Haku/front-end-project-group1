import { useState } from "react";
import { Button, Carousel, Col, Container, Row, Modal } from "react-bootstrap";
import ModalHomePage from "./ModalHomePage";

function TopPicks(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return(
    <>
      <div>
        <Container className="TopPicks mt-5">
          <h2 className="text-center">Top Picks For You</h2>
      <Carousel>
        {/* silde-1 */}
          <Carousel.Item interval={1000}>
            <Container>
              <Row>
                <Col md={{span : 2, offset: 1}} sm={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347575340.jpg"
                  alt="First slide"
                />
                <h6>Judul Buku</h6>
                <Button variant="link" onClick={handleShow} >Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}} sm={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347575340.jpg"
                  alt="First slide"
                />
                <h6>Judul Buku</h6>
                <Button variant="link" onClick={handleShow}>Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}} sm={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347575340.jpg"
                  alt="First slide"
                />
                <h6>Judul Buku</h6>
                <Button variant="link" onClick={handleShow}>Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}} sm={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347575340.jpg"
                  alt="First slide"
                />
                <h6>Judul Buku</h6>
                <Button variant="link" onClick={handleShow}>Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* slide-2 */}
          <Carousel.Item interval={500}>
            <Container>
              <Row className="mx-3">
                <Col md={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347357696.jpg"
                  alt="Second slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347357696.jpg"
                  alt="Second slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347357696.jpg"
                  alt="Second slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347357696.jpg"
                  alt="Second slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* slide-3 */}
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={{span : 2, offset: 1}}>
                <img
                 className="d-block w-30"
                 src="https://media.istockphoto.com/photos/blank-book-picture-id162833245?b=1&k=20&m=162833245&s=170667a&w=0&h=prgS09o9B08NvNy-O3mMy0AlRIGBroJp_naZySeJYVE="
                 alt="Third slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                 className="d-block w-30"
                 src="https://media.istockphoto.com/photos/blank-book-picture-id162833245?b=1&k=20&m=162833245&s=170667a&w=0&h=prgS09o9B08NvNy-O3mMy0AlRIGBroJp_naZySeJYVE="
                 alt="Third slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                 className="d-block w-30"
                 src="https://media.istockphoto.com/photos/blank-book-picture-id162833245?b=1&k=20&m=162833245&s=170667a&w=0&h=prgS09o9B08NvNy-O3mMy0AlRIGBroJp_naZySeJYVE="
                 alt="Third slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>

                <Col md={{span : 2, offset: 1}}>
                <img
                 className="d-block w-30"
                 src="https://media.istockphoto.com/photos/blank-book-picture-id162833245?b=1&k=20&m=162833245&s=170667a&w=0&h=prgS09o9B08NvNy-O3mMy0AlRIGBroJp_naZySeJYVE="
                 alt="Third slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        </Container>


        {/* untuk layar hp */}
        <Container className="TopPicks-sm mt-5">
          <h2 className="text-center">Top Picks For You</h2>
      <Carousel>
        {/* silde-1 */}
          <Carousel.Item interval={1000}>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center align-items-center flex-column" sm={{span: 5, offset: 3}}>
                <img
                  className="d-block"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347575340.jpg"
                  alt="First slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* slide-2 */}
          <Carousel.Item interval={500}>
            <Container>
              <Row className="mx-3">
                <Col className="d-flex justify-content-center align-items-center flex-column" sm={{span: 5, offset: 3}}>
                <img
                  className="d-block w-30"
                  src="https://image.shutterstock.com/image-illustration/patient-portrait-glyph-icon-style-600w-347357696.jpg"
                  alt="Second slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* slide-3 */}
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center align-items-center flex-column" sm={{span: 5, offset: 3}}>
                <img
                 className="d-block w-30"
                 src="https://media.istockphoto.com/photos/blank-book-picture-id162833245?b=1&k=20&m=162833245&s=170667a&w=0&h=prgS09o9B08NvNy-O3mMy0AlRIGBroJp_naZySeJYVE="
                 alt="Third slide"
                />
                <h6>Judul Buku</h6>
                <Button onClick={handleShow} variant="link">Baca Buku</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        </Container>

        {/* Modal */}
        <Modal className="ModalHomePage" show={show} onHide={handleClose}>
          <Modal.Header className="bg-dark" closeButton>
            <Modal.Title><h1>Login dulu...</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-xs-0 p-sm-2">
            <Container>
              <Row>
                <Col xs={9} sm={6}>
                <img src="https://images.unsplash.com/photo-1619633376278-d8652961ce02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZCUyMGJvb2slMjB2ZXJ0aWNhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>

                <Col xs={12} sm={6}>
                  <h5>Judul Buku</h5>
                  <h6>Penulis, Tahun terbit</h6>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae facilis earum ratione a vitae libero consectetur, nisi sit similique harum dicta in dolore delectus magnam eos amet excepturi nulla animi.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark">
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default TopPicks;