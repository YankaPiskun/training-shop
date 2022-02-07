import { Link } from "react-router-dom";
import Phone from "../../../images/Phone.svg";
import Location from "../../../images/Location.svg";
import Clock from "../../../images/Clock.svg";
import Facebook from "../../../images/Facebook.svg";
import Twitter from "../../../images/Twitter.svg";
import Instagram from "../../../images/Instagram.svg";
import Pinterest from "../../../images/Pinterest.svg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__main">
          <div className="topbar__info">
            <div className="topbar__info_item">
              <Link to="#">
                <img src={Phone} alt="Search"></img>
              </Link>
              +375 29 100 20 30
            </div>
            <div className="topbar__info_item">
              <Link to="#">
                <img src={Location} alt="Search"></img>
              </Link>
              Belarus, Gomel, Lange 17
            </div>
            <div className="topbar__info_item">
              <Link to="#">
                <img src={Clock} alt="Search"></img>
              </Link>
              All week 24/7
            </div>
          </div>
          <div className="topbar__icons">
            <div className="topbar__icons_item">
              <Link to="#">
                <img src={Facebook} alt="Search"></img>
              </Link>
            </div>
            <div className="topbar__icons_item">
              <Link to="#">
                <img src={Twitter} alt="Search"></img>
              </Link>
            </div>
            <div className="topbar__icons_item">
              <Link to="#">
                <img src={Instagram} alt="Search"></img>
              </Link>
            </div>
            <div className="topbar__icons_item">
              <Link to="#">
                <img src={Pinterest} alt="Search"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
