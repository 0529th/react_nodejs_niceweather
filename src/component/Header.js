import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const gnbList = ["NICE WEATHER", "YIN AND YANG", "Magazine", "Brand"];
  const gnbSubList = [
    "All",
    "Outer",
    "Top",
    "Bottom",
    "Hat",
    "Lifestyle",
    "etc",
  ];
  const createGnbSubList = () => {
    return (
      <ul className="gnb-sub">
        {gnbSubList.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    );
  };
  const gnbToggle = (e) => {
    e.currentTarget.classList.toggle("active");
    document.querySelector(".hamberger-menu").classList.toggle("active");
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };
  const goToProduct = () => {
    navigate("/product");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      // console.log(keyword);
      navigate(`/product?q=${keyword}`);
    }
  };

  const showSearch = () => {
    document.querySelector(".header .util input").classList.toggle("show");
  };

  return (
    <div className="header">
      <Container className="header-container">
        <div
          className="hamberger"
          onClick={(e) => {
            gnbToggle(e);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hamberger-menu">
          <div className="hamberger-menu-container">
            <div className="search-form-m">
              <input
                type="search"
                placeholder="제품검색"
                onKeyPress={(e) => search(e)}
              />
              <div className="search-form"></div>
            </div>
            <ul className="gnb-m">
              {gnbList.map((menu, index) => (
                <li key={menu} onClick={goToProduct}>
                  {menu}
                  {index <= 1 ? createGnbSubList() : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h1 className="logo" onClick={goToMain}></h1>
        <ul className="gnb">
          {gnbList.map((menu, index) => (
            <li key={menu} onClick={goToProduct}>
              {menu}
              {index <= 1 ? createGnbSubList() : ""}
            </li>
          ))}
        </ul>
        <div className="util">
          <div className="search">
            <input
              type="text"
              placeholder="제품검색"
              onKeyPress={(e) => search(e)}
            />
            <div className="search-form" onClick={showSearch}></div>
          </div>

          <div className="user" onClick={goToLogin}></div>
          <div className="cart" onClick={goToLogin}></div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
