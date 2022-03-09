import React, { useEffect, useState } from "react";
import axios from "axios";

import topPicks from '../topPicks'

// Components ////////////
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import CategoryCarousel from "../components/CategoryCarousel";
import BookCard from "../components/BookCard";
import BookPagination from "../components/BookPagination";
import { Container } from "react-bootstrap";
/////////////////////////

function CategoryPage() {
  const [buku, setbuku] = useState(topPicks);
  const [category, setCategory] = useState('Top Picks for You');
  const [items, setItems] = useState({
    startIndex:0,
    totalItems:0
  })
  const [url,setUrl] = useState('');
  let searchInput = "indonesia";

  async function nextPage(startIndex) {
    const result = await axios.get(`${url}&&startIndex=${startIndex}&maxResults=20`).catch((error) => console.log(error));
    const datas = result.data.items;
    filterData(datas);
  }

  function setSearch(i) {
    searchInput = i;
    fetchData(searchInput);
    setCategory(`search result for ${i}`);
    resetPaginationActiveStyle();
  }

  async function fetchData(title, category) {
    let newUrl = category
    ? `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&&startIndex=0&maxResults=20`
    : `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&&startIndex=0&maxResults=20`

    const result = await axios.get(newUrl).catch((error) => console.log(error));
    console.log(result);
    const datas = result.data.items;
    setItems({...items,totalItems:result.data.totalItems});
    filterData(datas);

    newUrl = newUrl.split('&')
    setUrl(newUrl[0]);
  }

  function filterData(datas) {
    const filteredData = [];

    for (const data of datas) {
      if (data.volumeInfo.imageLinks && data.accessInfo.viewability !== 'NO_PAGES') {
        const book = {
          id: data.id,
          judul: data.volumeInfo.title,
          cover: data.volumeInfo.imageLinks.thumbnail,
          penulis: data.volumeInfo.authors,
          date: data.volumeInfo.publishedDate,
          penerbit: data.volumeInfo.publisher,
          deskripsi: data.volumeInfo.description,
          readlink: data.volumeInfo.previewLink,
          price: undefined,
          buylink:undefined,
          amount:1
        };
        
        if(data.saleInfo.saleability === 'FOR_SALE') {
          book.price = data.saleInfo.retailPrice.amount;
          book.buylink = data.saleInfo.buyLink
        }

        filteredData.push(book);
      }

    }

    //console.log(filteredData);
    setbuku(filteredData);
  }

  function resetPaginationActiveStyle() {
    const allButton = document.querySelectorAll('.page-item');
    for(const button of allButton) {
      button.classList.remove('active');
    }
    allButton[0].classList.add('active');
  }

  return (
    <>
      <MainNavbar />
      <div className="content d-flex">
        <Sidebar fetchData={fetchData} setCategory={setCategory} reset={resetPaginationActiveStyle} />
        <main style={{ width: "100%" }}>
          <CategoryCarousel />
          <Container>
            <div className="d-md-flex mt-5 justify-content-between align-items-center">
              <h3 className="md">{category}</h3>
              <Search setSearch={setSearch} />
            </div>
            <div id="book-container" className="d-flex flex-wrap justify-content-center mb-2">
              {buku.length !== 0 ? (
                buku.map((b, index) => {
                  return <BookCard data={b} key={index} />;
                })
              ) : (
                <h1>Loading</h1>
              )}
            </div>
            <BookPagination items={items} setItems={setItems} nextPage={nextPage} />
          </Container>
        </main>
      </div>
      <MainFooter />
    </>
  );
}

export default CategoryPage;
