import "./TopPicks.css";
import Slider from "react-slick";
import topPicks from "../../../topPicks";
import { useDispatch } from "react-redux";
import { addBookToMyLibrary } from "../../../redux/actions/UserAction";
import BookCard from "../../../components/BookCard";

function TopPicks() {
  
  const dispatch = useDispatch();

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

          {topPicks.map((d, index)=>(
          <BookCard data={d} key={index}/>
          ))}
        
        </Slider>
      </div>
    );
  }

export default TopPicks;
