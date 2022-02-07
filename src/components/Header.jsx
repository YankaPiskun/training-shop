import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Topbar from "../components/UI/Navbar/Topbar";
import Slider from "../images/Slider.jpg";
import Men from "../images/Men.jpg";
import Women from "../images/Women.jpg";
import Accessories from "../images/Accessories.jpg";
import Truck from "../images/Truck.svg";
import Refresh from "../images/Refresh.svg";
import Advantage from "../images/Advantage.svg";

const Header = () => {
  return (
    <div className="header">
      <Topbar></Topbar>
      <Navbar></Navbar>
      <div className="header__banners">
        <div className="container">
          <div className="header__items">
            <div className="header__slider">
              <img src={Slider} alt="Slider" />
            </div>
            <div className="slider_text">
                dasdsad
            </div>
            <div className="header__menu">
              <div className="header__menu_items">
                <div className="header__menu_item">
                  <img src={Women} alt="Women" />
                </div>
                <div className="header__menu_item1">
                  <img src={Men} alt="Men" />
                </div>
              </div>
              <div className="header__menu_accessories">
                <img src={Accessories} alt="Accessories" />
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="header__bottom_item">
              <img src={Truck} alt="Truck" />
              <div className="header__bottom_text">
                <div>FREE SHIPPING</div>
                <div>On all UA order or order above $100</div>
              </div>
            </div>
            <div className="header__bottom_item">
              <img src={Refresh} alt="Refresh" />
              <div className="header__bottom_text">
                <div>30 DAYS RETURN</div>
                <div>Simply return it within 30 days for an exchange</div>
              </div>
            </div>
            <div className="header__bottom_item">
              <img src={Advantage} alt="Advantage" />
              <div className="header__bottom_text">
                <div>SUPPORT 24/7</div>
                <div>Contact us 24 hours a day, 7 days a week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
