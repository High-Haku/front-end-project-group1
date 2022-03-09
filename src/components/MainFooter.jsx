import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom"

function MainFooter() {
  return (
    <>
      <div className="bg-dark text-white" style={{ minHeight: "200px" }}>
        <Container fluid="lg">
          <Row className="py-5 px-4 justify-content-between">
            <Col md={7} className="mb-5">
              <h3 style={{fontFamily:'Berkshire Swash'}}>Haku Library</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                optio sunt earum odio a molestiae aliquam eius eos, pariatur
                voluptatem et aspernatur culpa nobis alias incidunt nihil!
                Aperiam, cumque atque.
              </p>
              <div className="social-media-container">
                <a href="https://facebook.com"><Image src={require('../images/icons/facebook.png')} width="36px" className="me-3"></Image></a>
                <a href="https://instagram.com"><Image src={require('../images/icons/instagram.png')} width="36px" className="me-3"></Image></a>
                <a href="https://twitter.com"><Image src={require('../images/icons/twitter.png')} width="36px" className="me-3"></Image></a>
              </div>
            </Col>
            <Col md={5}>
              <h3>Kontak</h3>
              <ul style={{listStyle:'none', padding:'0'}}>
                <li className="d-flex align-items-center my-2">
                  <Image src={require('../images/icons/maps.png')} width={'24px'} height={'24px'}></Image>
                  <p className="m-0 ms-3">Benyamin Sueb St. RT.13/RW.10, Pademangan Tim., Jakarta Utara,
                  Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14410</p>
                </li>
                <li className="d-flex align-items-center my-2">
                  <Image src={require('../images/icons/telephone.png')} width={'24px'} height={'24px'}></Image>
                  <p className="m-0 ms-3">0812 3456 7890</p>
                </li>
                <li className="d-flex align-items-center my-2">
                  <Image src={require('../images/icons/mail.png')} width={'24px'} height={'24px'}></Image>
                  <p className="m-0 ms-3">bacabukuonline@gmail.com</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
          <Row>
            <p className="text-center bg-success m-0 py-2">© Copyright 2022 - <Link to="/about" className="text-black" style={{textDecoration:"none"}}>High Haku Frontend Group 1</Link></p>
          </Row>
      </div>
    </>
  );
}

export default MainFooter;
