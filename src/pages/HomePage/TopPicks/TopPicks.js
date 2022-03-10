import "./TopPicks.css";
import Slider from "react-slick";
import topPicks from "../../../topPicks";
import { useDispatch } from "react-redux";
import { addBookToMyLibrary } from "../../../redux/actions/UserAction";
import BookCard from "../../../components/BookCard";
import { useEffect, useState } from "react";

function TopPicks() {
  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="container slider my-5">
      <h1 className="text-center">Top Picks For You</h1>
      <Slider {...settings}>
        {topPicks.map((d, index) => (
          <BookCard data={d} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default TopPicks;
