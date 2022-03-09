import "./TopPicks.css";
import Slider from "react-slick";

function TopPicks() {
  
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="container slider my-5">
        <h1 className="text-center">Top Picks For You</h1>
        <Slider {...settings}>
        <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h6 className="text-center">Judul Buku</h6>
            <div className="button">
              <button>Mulai Baca</button>
              <button className="mx-2">Simpan</button>  
            </div>
          </div>
        </Slider>
      </div>
    );
  }

export default TopPicks;
