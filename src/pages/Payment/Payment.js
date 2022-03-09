import { Dropdown, Table, Button } from "react-bootstrap";
import './Payment.css'

function Payment() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 offset-1">
            <h1 className="text-decoration-underline">Payment Information</h1>
            <h5>Bambang Pamungkas - 08123456789</h5>
            <p className="alamat">
              Benyamin Sueb St. RT.13/RW.10, martopuro, Pademangan Timur., Jakarta Utara,
              Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14410   
                <span className="text-danger fw-bold text-decoration-underline"> Ubah</span>
            </p>
            
            <div className="pembayaran">
                <h5>Pembayaran</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Pilih Metode Pembayaran
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="isi-dropdown">
                        <Dropdown.Item href="#/action-1">OVO</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">DANA</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">GOPAY</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BNI</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BCA</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BRI</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">COD</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="pengiriman mt-3">
                <h5>Pengiriman</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Pilih Kurir
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="isi-dropdown">
                        <Dropdown.Item href="#/action-1">JNE</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">J&T</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">POS INDONESIA</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">SICEPAT</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">TIKI</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">NINJA EXPRESS</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">GO-SEND</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="pilih-pengiriman mt-3">
                <h5>Jenis Pengiriman</h5>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Jenis Pengiriman
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="isi-dropdown">
                        <Dropdown.Item href="#/action-1">OK (3-5 Hari)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Reguler (2-3 Hari)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Express (1-2 Hari)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Same Day (1 Hari)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p className="d-flex justify-content-end">Ongkir Rp. 12.000</p>
            </div>
          </div>

          

          <div className="col-md-5 offset-1">
            <h3>Pesanan Anda</h3>  

            <div>
            <Table  bordered size="sm">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama Buku</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Buku Pertama</td>
                  <td>Rp. 75.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Buku Kedua</td>
                  <td>Rp. 50.000</td>
                </tr>
                <tr>
                  <td colSpan={2}>Total</td>
                  <td>Rp. 125.000</td>
                </tr>
              </tbody>
            </Table>
            </div>

            <div className="mt-4">
              <h4>Total Pembayaran</h4>

              <div className="ms-3 d-flex justify-content-between">
                <p className="m-0">Harga Buku</p>
                <p className="m-0">Rp. 125.000</p>  
              </div>  

              <div className="ms-3 d-flex justify-content-between">
                <p className="m-0">Harga Ongkir</p>
                <p className="m-0">Rp. 12.000</p>  
              </div>
            </div>

            <hr className="garis" />

            <h6 className="d-flex justify-content-end text-danger fw-bold">Rp. 37.000</h6>

            <div className="d-flex justify-content-end">
              <Button className="w-50" variant="dark">Bayar Sekarang</Button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
