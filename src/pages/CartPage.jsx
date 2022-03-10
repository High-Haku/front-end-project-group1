import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeBookFromCart, changeBookAmount } from "../redux/actions/CartAction";
import formatRupiah from '../formatRupiah'

function CartPage() {
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  //console.log(items);

  return (
    <>
      <MainNavbar />
      {items.length !== 0 ? (
        <Container fluid="md" className="mb-5">
          <h2 className="my-4">Shopping Cart</h2>
          <Row>
            <Col lg="8">
              <div className="bg-light p-3 border">
                <Row className="mb-3 fw-bold" style={{ color: "#aaa" }}>
                  <Col md="5" xs="6">
                    PRODUCT
                  </Col>
                  <Col md="2" xs="3">
                    QUANTITY
                  </Col>
                  <Col md="3" xs="3">
                    PRICE
                  </Col>
                </Row>
                {items.map((item) => {
                  return (
                    <div key={item.id}>
                      <hr />
                      <Row className="my-4 justify-content-end">
                        <Col md="2" xs="2" className="mb-2">
                          <img src={item.cover} alt={item.judul} width="100%" />
                        </Col>
                        <Col md="3" xs="4" className="fw-bold">
                          {item.judul}
                        </Col>
                        <Col md="2" xs="3">
                          <select id="amount" className="w-75" onChange={(e) => dispatch(changeBookAmount(item,e.target.value))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </Col>
                        <Col md="3" xs="3">
                          Rp {formatRupiah(item.price * item.amount)}
                        </Col>
                        <Col
                          sm="2"
                          className="d-flex justify-content-end align-items-start"
                        >
                          <Button
                            variant="danger"
                            onClick={() => dispatch(removeBookFromCart(item))}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col>
              <div className="bg-light p-3 border">
                <Row className="justify-content-between">
                  <Col>
                    <h5 className="fw-bold">Total Price</h5>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <h5>Rp {formatRupiah(items.map(a => a.price * a.amount).reduce((a,b) => a+b))}</h5>
                  </Col>
                </Row>
                <Row className="px-2 mt-3">
                  <Link to='/payment'><Button variant="success" className='w-100'>Make Purchase</Button></Link>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md="6" className="d-flex justify-content-center">
              <img
                src={require("../images/empty-cart.png")}
                alt="Empty Cart"
                width="80%"
              />
            </Col>
            <Col md="6" className="d-flex flex-column mt-4">
              <h1 className="mb-4">Your Cart is Empty</h1>
              <Link to="/category">
                <Button variant="success" className="w-100">
                  Shop Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default CartPage;
