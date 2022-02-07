import { Link } from "react-router-dom";
import Search from "../../../images/Search.svg";
import Global from "../../../images/Global.svg";
import Shopping_bag from "../../../images/Shopping-bag.svg";
import User from "../../../images/User.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__main">
          <div className="navbar__logo">
            <Link to="#" className="navbar__logo_item">
              CleverShop
            </Link>
          </div>
          <div className="navbar__links">
            <Link to="/post/main" className="navbar__links_item">
              About Us
            </Link>
            <Link to="/post" className="navbar__links_item">
              Women
            </Link>
            <Link to="/post/main" className="navbar__links_item">
              Men
            </Link>
            <Link to="/post" className="navbar__links_item">
              Beauty
            </Link>
            <Link to="/post/main" className="navbar__links_item">
              Accession
            </Link>
            <Link to="/post" className="navbar__links_item">
              Blog
            </Link>
            <Link to="/post/main" className="navbar__links_item">
              Contact
            </Link>
          </div>
          <div className="navbar__icons">
            <Link to="#">
              <img src={Search} alt="Search"></img>
            </Link>
            <Link to="#">
              <img src={Global} alt="Global"></img>
            </Link>
            <Link to="#">
              <img src={User} alt="User"></img>
            </Link>
            <Link to="#">
              <img src={Shopping_bag} alt="Shopin_bag"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
