import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const subList = ["All", "Outer", "Top", "Bottom", "Hat", "Lifestyle", "etc"];
  const createSubList = () => {
    return subList.map((menu) => <li key={menu}>{menu}</li>);
  };

  // db.json API call
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getData = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/0529th/react_nodejs_niceweather/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div>
      <Header />
      <Container className="product-container">
        <h2 className="product-title"></h2>
        <ul className="product-nav">{createSubList()}</ul>
      </Container>
      <Container>
        <Row>
          {productList.map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Product;
