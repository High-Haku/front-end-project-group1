
import "./HomePage.css";

function Bookoftheday() {
  return (
    <>
      <div className="Bookoftheday mt-3">
        <div className="container">
          <div className="container">
            <div className="col-xl-4 offset-xl-4 col-lg-5 offset-lg-4 col-md-8 mt-3 col-sm-8 offset-sm-3">
              <h1>Books Of The Day</h1>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-4 offset-sm-4 mt-sm-2">
              <img
                src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
                alt=""
              />
            </div>
            <div className="col-xl-7 offset-xl-0 col-lg-7 offset-lg-0 col-md-7 offset-md-1 col-sm-12 offset-sm-0 mt-sm-3">
              <h5>Nama Penulis</h5>
              <p>judul Buku Tahun Terbit</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, quae similique. Provident fugit hic sint dicta
                voluptate. Pariatur minus repellat iste ad, error aliquam
                assumenda reiciendis. Temporibus voluptatum ut optio. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Nulla, dicta
                qui quia dolore quod, quisquam quam quasi mollitia voluptate
                pariatur, facere blanditiis! Molestiae sit eligendi sapiente
                tempore impedit iste dicta?
              </p>

              <button type="button" className="btn btn-dark">Simpan Baca Nanti</button>
              <button type="button" className="btn btn-dark ms-2">Baca</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookoftheday;
