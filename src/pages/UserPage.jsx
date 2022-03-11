import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Tab,
  Tabs,
  Form,
  Badge,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLoginInit, clearData } from "../redux/actions/UserAction";
import updateLocalStorageData from "../utils/updateLocalStorageData";
import BookCard from "../components/BookCard";
import formatRupiah from "../utils/formatRupiah";

function UserPage() {
  const data = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.name === "") navigate("/");
  }, [data]);

  return (
    <>
      <MainNavbar />
      <Container
        fluid="sm"
        className="my-4"
        style={{ minHeight: "80vh", maxWidth: "900px" }}
      >
        <h3 className="text-md-start text-center mb-3">My Profile</h3>
        <div className="bg-light border">
          <Tabs
            defaultActiveKey="profile"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="profile" title="Profile" className="bg-transparent">
              <Profile data={data} />
            </Tab>
            <Tab
              eventKey="myLibrary"
              title="My Library"
              className="bg-transparent px-3 pb-3"
            >
              {data.myLibrary.length !== 0 ? (
                <div className="d-flex flex-wrap">
                  {data.myLibrary.map((d, index) => (
                    <BookCard data={d} key={index} />
                  ))}
                </div>
              ) : (
                <h5 className="text-center" style={{ color: "#999" }}>
                  Tidak Ada Buku di Library Kamu
                </h5>
              )}
            </Tab>
            <Tab
              eventKey="transaksi"
              title="Transaksi"
              className="bg-transparent px-3 pb-3"
            >
              {data.purchaseHistory.length !== 0 ? (
                <div className="d-flex flex-column">
                  {data.purchaseHistory.map((d,index) => (
                      <div
                        className="p-2 mb-3"
                        style={{ backgroundColor: "#eee", borderRadius: "3px" }}
                        key={index}
                      >
                        <div>
                          <span className="fw-bold" style={{ color: "#222" }}>
                            Transaksi Tanggal : {d.date}
                          </span>{" "}
                          <Badge bg="success">Proses</Badge>
                        </div>
                        <Row className="mt-2">
                          <Col md="9" sm="8">
                            <ol>
                              {d.items.map((i,index) => (
                                <li key={index}>{i.judul} ({i.amount} buku)</li>
                              ))}
                            </ol>
                          </Col>
                          <Col md="3" sm="4" className="border-start border-1">
                            <span className="fw-bold" style={{color:'#222'}}>Total Harga</span>
                            <h5 className="text-danger fw-bold">Rp {formatRupiah(d.totalPrice)}</h5>
                          </Col>
                        </Row>
                      </div>
                  ))}
                </div>
              ) : (
                <h5 className="text-center" style={{ color: "#999" }}>
                  Tidak Ada Buku di Library Kamu
                </h5>
              )}
            </Tab>
          </Tabs>
        </div>
      </Container>
      <MainFooter />
    </>
  );
}

export function Profile({ data }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [dataUser, setDataUser] = useState({
    ...data,
    name: data.name,
    email: data.email,
    address: data.address,
    phone: data.phone,
  });

  function handleSubmit() {
    dispatch(userLoginInit(dataUser));
    updateLocalStorageData(dataUser);
    setEdit(!edit);
  }

  return (
    <>
      <Row className="w-100 mb-4 m-0 px-2">
        <Col md="3" className="text-center mb-4">
          <img
            src={require("../images/user.png")}
            alt="user"
            width="100%"
            style={{ maxWidth: "200px" }}
          />
        </Col>
        <Col md="9" className="px-4">
          {edit ? (
            <>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nama lengkap anda..."
                    onChange={(e) =>
                      setDataUser({ ...dataUser, name: e.target.value })
                    }
                    value={dataUser.name ? dataUser.name : ""}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) =>
                      setDataUser({ ...dataUser, email: e.target.value })
                    }
                    value={dataUser.email ? dataUser.email : ""}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="masukan alamat lengkap anda..."
                    onChange={(e) =>
                      setDataUser({ ...dataUser, address: e.target.value })
                    }
                    value={dataUser.address ? dataUser.address : ""}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukan nomor telepon anda..."
                    onChange={(e) =>
                      setDataUser({ ...dataUser, phone: e.target.value })
                    }
                    value={dataUser.phone ? dataUser.phone : ""}
                    required
                  />
                </Form.Group>
                <Button variant="success" className="float-end" type="submit">
                  Konfirmasi
                </Button>
              </Form>
            </>
          ) : (
            <>
              <div className="position-relative">
                <div className="mb-3">
                  <div className="fw-bold">Nama</div>
                  <div>{data.name}</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">Alamat</div>
                  <div>{data.address ? data.address : <>-</>}</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">Email</div>
                  <div>{data.email}</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">Telepon</div>
                  <div>{data.phone ? data.phone : <>-</>}</div>
                </div>
                <Button
                  className="position-absolute"
                  style={{ right: "0", bottom: "0px" }}
                  onClick={() => dispatch(clearData())}
                  variant="danger"
                >
                  Log Out
                </Button>
                <Button
                  className="position-absolute"
                  style={{ right: "100px", bottom: "0px" }}
                  onClick={() => setEdit(!edit)}
                >
                  Edit Data
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default UserPage;
