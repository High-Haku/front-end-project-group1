import "./HomePage.css";
import { useDispatch } from "react-redux";
import { addBookToMyLibrary } from "../../redux/actions/UserAction";
import { Button } from "react-bootstrap";

function Bookoftheday() {
  const data = {
    id: "HkBlDwAAQBAJ",
    judul: "Dasar Logika Pemrograman Komputer",
    cover:
      "http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    penulis: ["Abdul Kadir"],
    date: "2017-12-27",
    penerbit: "Elex Media Komputindo",
    sinopsis:
      "Buku yang sangat cocok untuk Anda yang sedang mempelajari dasar pemrograman komputer. Buku ini mengajarkan logika untuk menyelesaikan berbagai masalah yang ditangani oleh komputer dengan menggunakan Flowgorithm. Dengan menggunakan perangkat lunak ini, berbagai permasalahan komputasi dapat diselesaikan dengan menyusun diagram alir. Kemudian, Anda bisa mengujinya untuk memastikan bahwa solusi yang Anda buat memang sudah sesuai atau tidak, tanpa perlu melibatkan orang lain.",
    readlink:
      "http://books.google.co.id/books?id=HkBlDwAAQBAJ&printsec=frontcover&dq=intitle:pemrograman&hl=&cd=1&source=gbs_api",
  };

  const regex = /id=.*/g;
  const url = regex.exec(data.readlink)[0];

  const dispatch = useDispatch();

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
              <img src={data.cover} alt="" />
            </div>
            <div className="col-xl-7 offset-xl-0 col-lg-7 offset-lg-0 col-md-7 offset-md-0 col-sm-12 offset-sm-0 mt-sm-3">
              <h5>{data.penulis}</h5>
              <h6>{data.judul}</h6>
              <p>{data.sinopsis}</p>

              <button
                type="button"
                class="btn btn-dark"
                onClick={() => dispatch(addBookToMyLibrary(data))}
              >
                Simpan Baca Nanti
              </button>
              <a href={`/book/${url}`}>
                <Button className="ms-2" variant="success">
                  Read Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookoftheday;
