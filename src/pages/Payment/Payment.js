import { Table, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "./Payment.css";
import { useSelector } from "react-redux";
import formatRupiah from "../../formatRupiah";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/actions/CartAction";
import { useDispatch } from "react-redux";

function Payment() {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const login = sessionStorage.getItem("login") || false;

  const [ongkir, setOngkir] = useState(12000);
  const [alamat, setAlamat] = useState(user.address || "");
  const [ubahButton, setUbahButton] = useState(true);
  const [paymentInformation, setPaymentInformation] = useState({
    pembayaran: "",
    kurir: "",
    jenis: "",
  });

  const { items } = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0 || !login) navigate("/");
    if (!!alamat) setUbahButton(false);
  }, []);

  useEffect(() => {
    const isComplete = Object.values(paymentInformation).every((value) => {
      if (value !== "") {
        return true;
      }

      return false;
    });

    if(!!document.querySelector(".bayar")) {
      alamat && isComplete
      ? document.querySelector(".bayar").removeAttribute("disabled")
      : document.querySelector(".bayar").setAttribute("disabled", "");
    }

    calculateOngkir();
  }, [alamat, paymentInformation]);

  function calculateOngkir() {
    let hargaJenis = 0;
    let hargaKurir = 0;

    switch (paymentInformation.jenis) {
      case "oke":
        hargaJenis = 6000;
        break;
      case "reguler":
        hargaJenis = 8000;
        break;
      case "express":
        hargaJenis = 10000;
        break;
      case "same":
        hargaJenis = 12000;
        break;
      default:
        return;
    }

    switch (paymentInformation.kurir) {
      case "JNE":
        hargaKurir = 2000;
        break;
      case "J&T":
        hargaKurir = 1500;
        break;
      case "POS":
        hargaKurir = 2500;
        break;
      case "SICEPAT":
        hargaKurir = 1000;
        break;
      case "TIKI":
        hargaKurir = 2500;
        break;
      case "NINJA":
        hargaKurir = 3000;
        break;
      case "GO-SEND":
        hargaKurir = 5000;
        break;
      default:
        return;
    }

    setOngkir(hargaJenis + hargaKurir);
  }

  function handleOnPay() {
    alert('Transaksi sukses, barang anda sedang kami proses');

    const d = new Date()
    const purchaseHistory = {items, date:`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`}
    user.purchaseHistory.push(purchaseHistory);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(clearCart());
    navigate('/');
  }

  if (items.length !== 0) {
    const totalBookPrice = items
      .map((a) => a.price * a.amount)
      .reduce((a, b) => a + b);

    return (
      <>
        <div className="container my-5">
          <h1 className="text-decoration-underline mb-4">
            Payment Information
          </h1>
          <div className="row d-flex ">
            <div className="col-md-5">
              <h5>
                {user.name} - {user.phone}
              </h5>
              {!ubahButton ? (
                <>
                  <p className="alamat">
                    {alamat} -{" "}
                    <a href="#" onClick={() => setUbahButton(!ubahButton)}>
                      ubah
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Masukan alamat anda..."
                      aria-label="Masukan alamat anda..."
                      aria-describedby="basic-addon2"
                      as="textarea"
                      rows={2}
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                    />
                    <Button
                      variant="outline-success"
                      id="button-addon2"
                      onClick={() => setUbahButton(!ubahButton)}
                    >
                      oke
                    </Button>
                  </InputGroup>
                </>
              )}

              <div className="pembayaran">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Pembayaran</h5>
                  </Form.Label>
                  <Form.Select
                    defaultValue="pilih Metode"
                    onChange={(e) =>
                      setPaymentInformation({
                        ...paymentInformation,
                        pembayaran: e.target.value,
                      })
                    }
                  >
                    <option value="pilih Metode" disabled>
                      Pilih Metode Pembayaran
                    </option>
                    <option value="OVO">OVO</option>
                    <option value="DANA">DANA</option>
                    <option value="GOPAY">GOPAY</option>
                    <option value="BNI">BNI</option>
                    <option value="BCA">BCA</option>
                    <option value="BRI">BRI</option>
                    <option value="COD">COD</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="pengiriman mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Kurir Pengiriman</h5>
                  </Form.Label>
                  <Form.Select
                    defaultValue="kurir"
                    onChange={(e) =>
                      setPaymentInformation({
                        ...paymentInformation,
                        kurir: e.target.value,
                      })
                    }
                  >
                    <option value="kurir" disabled>
                      Pilih Kurir
                    </option>
                    <option value="JNE">JNE</option>
                    <option value="J&T">J&T</option>
                    <option value="POS">POS INDONESIA</option>
                    <option value="SICEPAT">SICEPAT</option>
                    <option value="TIKI">TIKI</option>
                    <option value="NINJA">NINJA EXPRESS</option>
                    <option value="GO-SEND">GO-SEND</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="pilih-pengiriman mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Jenis Pengiriman</h5>
                  </Form.Label>
                  <Form.Select
                    defaultValue="jenis pengiriman"
                    onChange={(e) =>
                      setPaymentInformation({
                        ...paymentInformation,
                        jenis: e.target.value,
                      })
                    }
                  >
                    <option value="jenis pengiriman" disabled>
                      Jenis Pengiriman
                    </option>
                    <option value="oke">Oke (3-5 hari)</option>
                    <option value="reguler">Reguler (2-3 hari)</option>
                    <option value="express">Express (1-2 hari)</option>
                    <option value="same">Same Day (1 hari)</option>
                  </Form.Select>
                </Form.Group>
                <p className="d-flex justify-content-end">
                  Ongkir Rp {formatRupiah(ongkir)}
                </p>
              </div>
            </div>

            <div className="col-md-6 offset-md-1">
              <h4 className="text-success fw-bold">Pesanan Anda</h4>

              <div>
                <Table bordered size="lg">
                  <thead className="thead-light">
                    <tr>
                      <th>No.</th>
                      <th>Nama Buku</th>
                      <th>Jumlah</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.judul}</td>
                          <td>{item.amount}</td>
                          <td>Rp{formatRupiah(item.amount * item.price)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3} className="fw-bold">
                        Total
                      </td>
                      <td className="fw-bold">
                        Rp{formatRupiah(totalBookPrice)}
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </div>

              <div className="mt-4">
                <h4 className="text-success fw-bold">Total Pembayaran</h4>

                <div className="ms-3 d-flex justify-content-between">
                  <p className="m-0">Harga Buku</p>
                  <p className="m-0">Rp {formatRupiah(totalBookPrice)}</p>
                </div>

                <div className="ms-3 d-flex justify-content-between">
                  <p className="m-0">Harga Ongkir</p>
                  <p className="m-0">Rp {formatRupiah(ongkir)}</p>
                </div>
              </div>

              <hr className="garis" />

              <h3 className="d-flex justify-content-end text-danger fw-bold">
                Rp {formatRupiah(totalBookPrice + ongkir)}
              </h3>

              <div className="d-flex justify-content-end">
                <Button
                  className="w-50 fw-bold bayar"
                  variant="danger"
                  onClick={handleOnPay}
                >
                  Bayar Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h2>There is no item on cart</h2>;
  }
}

export default Payment;
