import "./HomePage.css";
import MainFooter from "../../components/MainFooter";
import Bookoftheday from "./Bookoftheday";
import TopPicks from "./TopPicks/TopPicks";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const[search, setSearch] = useState('')
  const[data, setData] = useState([])

async function getData(){
  const hasil = await axios.get (
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&&startIndex=0&maxResults=20`
);
let limitData = [];
        for(let i=0; i < 4 ; i++){
            limitData.push(hasil.data.items[i]);
        }

filterData(limitData)
}

console.log(data)

function filterData(datas) {
  const filteredData = [];

  for (const data of datas) {
    if (data.volumeInfo.imageLinks) {
      const book = {
        id: data.id,
        judul: data.volumeInfo.title,
        cover: data.volumeInfo.imageLinks.thumbnail,
        penulis: data.volumeInfo.authors,
        date: data.volumeInfo.publishedDate,
        penerbit: data.volumeInfo.publisher,
        sinopsis: data.volumeInfo.description,
        readlink: data.volumeInfo.previewLink,
      };
      filteredData.push(book);
    }
  }

  setData(filteredData);
}


  return (
    <>
      <div className="HomePage d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "90vh" }}>
        <div
          className="container-fluid"
        >
          <div className="row">
            <div className="text-center">
              <h1>Mau Baca apa Hari ini</h1>
            </div>
            <div className="col-md-7 offset-md-3 col-sm-7 offset-sm-3">
              <div className="d-flex">
                  <input
                    className="form-control text-light me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ background: "rgba(0, 0, 0, 0.1)"}}

                    onChange={(e)=>{
                      setSearch(e.target.value)
                    }}
                  />
                  <button onClick={getData} className="btn btn-success fw-bold">
                    Search
                  </button>
              </div>    

            
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center  mt-4 container mb-4">            

            {data.map((d)=>(
           <div className="card ms-3">
           <img src={d.cover} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h6 className="card-title">{d.judul}</h6>
             <a href="#" className="btn btn-dark">Lanjut Baca</a>
           </div>
         </div>
      ))}

      </div>

      </div>
      

     

      <Bookoftheday />
      <TopPicks />
      <MainFooter />
    </>
  );
}

export default HomePage;
