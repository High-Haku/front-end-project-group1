import "./AboutUs.css"
import MainFooter from "../../components/MainFooter";

function AboutUs() {
  return (
  <div>
    <div className="container about-us mb-4">
      <div className="row">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          earum optio ullam perferendis nam quod, pariatur, ea dolorum
          temporibus facilis maxime doloribus perspiciatis similique, ad vel
          modi. Enim, quae distinctio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam architecto quo officia repellat laudantium, ea
          quia vel temporibus rem aliquam beatae nostrum, veniam doloremque
          omnis? Mollitia ipsum rerum velit vitae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolor sed rem consequuntur similique.
          Iste neque, aliquid debitis reprehenderit quaerat, facere fugiat
          impedit aspernatur unde harum adipisci architecto laborum culpa nisi.
        </p>
      </div>

      <div className="row">
        <h1>THE TEAM</h1>
      </div>

      <div className="row content-team">
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h4>Gilman Firdaus</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad,
            accusantium iste libero perspiciatis voluptatibus dolorem enim,
            ratione quas debitis vitae totam magni expedita voluptas culpa
            excepturi nostrum, deleniti minima!
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h4>Reyshan Indradi</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad,
            accusantium iste libero perspiciatis voluptatibus dolorem enim,
            ratione quas debitis vitae totam magni expedita voluptas culpa
            excepturi nostrum, deleniti minima!
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h4>Jasmin Mcckel</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad,
            accusantium iste libero perspiciatis voluptatibus dolorem enim,
            ratione quas debitis vitae totam magni expedita voluptas culpa
            excepturi nostrum, deleniti minima!
          </p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h4>M Abdul Mukhid</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad,
            accusantium iste libero perspiciatis voluptatibus dolorem enim,
            ratione quas debitis vitae totam magni expedita voluptas culpa
            excepturi nostrum, deleniti minima!
          </p>
        </div>
      </div>
    </div>
    <MainFooter/>
  </div>
  );
}

export default AboutUs;
