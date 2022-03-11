import "./AboutUs.css";
import MainFooter from "../../components/MainFooter";

function AboutUs() {
  return (
    <div>
      <div className="container about-us mb-4">
        <div className="row">
          <h1> ABOUT US </h1>
          <p>
            Haku Library merupakan upaya untuk memelihara dan meningkatkan
            efisiensi dan efektifitas proses belajar-mengajar. Perpustakaan yang
            terorganisir secara baik dan sisitematis, secara langsung atau pun
            tidak langsung dapat memberikan kemudahan bagi proses belajar
            mengajar di sekolah tempat perpustakaan tersebut berada. Hal ini,
            terkait dengan kemajuan bidang pendidikan dan dengan adanya
            perbaikan metode belajar-mengajar yang dirasakan tidak bisa
            dipisahkan dari masalah penyediaan fasilitas dan sarana pendidikan.
          </p>
        </div>
        <div className="row">
          <h1> THE TEAM </h1>
        </div>
        <div className="row content-team">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div>
              <img
                src={require('../../images/gilman.jpg')}
                alt=""
              />
            </div>
            <h4> Gilman Firdaus </h4> <p>Hobi ku bermain musik</p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div>
              <img
                src={require('../../images/reyshan.jpg')}
                alt=""
              />
            </div>
            <h4> Reyshan Indradi </h4> <p>Meraih mimpi setinggi hoop basket</p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div>
              <img
                src={require('../../images/jasmin.jpg')}
                alt=""
              />
            </div>
            <h4> Jasmin Mcckel </h4>
            <p>binge watch di netflix adalah hal paling asyik</p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div>
              <img
                src={require('../../images/abdul.jpg')}
                alt=""
              />
            </div>
            <h4> M Abdul Mukhid </h4>
            <p>Makanan kesukaanku rawon pake kerupuk</p>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default AboutUs;
