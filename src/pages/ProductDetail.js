import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);

  const [detailData, setDetailData] = useState(null);

  const getDetailData = async () => {
    const url = `https://my-json-server.typicode.com/0529th/react_nodejs_niceweather/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setDetailData(data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <div>
      <Header />
      <Container className="detail-container">
        <Row>
          <Col lg={6}>
            <div className="detail-left">
              <img src={detailData?.img} alt="detail-img" />
              {detailData?.soldout === true ? (
                <div className="soldout">sold{"\n"}out</div>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="detail-right">
              <div className="detail-title">{detailData?.title}</div>
              <div className="detail-price">{detailData?.price} 원</div>
              <div className="detail-info">
                <div>
                  <span>적립금</span>
                  <span>1%</span>
                </div>
                <div>
                  <span>배송비</span>
                  <span>
                    <span>3500원</span>
                    <span>제주 및 도서 산간 5,000원 추가</span>
                  </span>
                </div>
                <form>
                  <label htmlFor="number">수량</label>
                  <input id="number" type="number" min="1" max="20" />
                </form>
              </div>
              <div className="detail-total">
                <div>
                  <span>주문 수량</span>
                  <span>0개</span>
                </div>
                <div>
                  <span>총 상품 금액</span>
                  <span>0원</span>
                </div>
              </div>
              <div className="detail-button">
                <button type="submit">구매하기</button>
                <button type="submit">장바구니에 담기</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
