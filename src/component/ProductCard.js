import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Col lg={3} className="product-item" onClick={goToProductDetail}>
      <div className="item-img">
        <div className="img">
          <img src={item?.img} alt={item?.id} />
        </div>
        {item?.soldout === true ? (
          <div className="soldout">sold{"\n"}out</div>
        ) : (
          ""
        )}
      </div>
      <div className="item-info">
        <div className="title">{item?.title}</div>
        <div className="price">{item?.price} 원</div>
      </div>
    </Col>
  );
};

export default ProductCard;
