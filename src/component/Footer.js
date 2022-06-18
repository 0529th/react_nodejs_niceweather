import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <div className="left">
          <p>
            상호: 주식회사 나이스웨더 | 대표: 노승훈 | 개인정보관리책임자:
            노승훈 | 전화: 1522-1254 | 이메일: help@niceweather.kr
          </p>
          <p>
            주소: 서울특별시 강남구 강남대로162길 37, 2층 | 사업자등록번호:
            693-81-02003 | 통신판매: 제2020-서울강남-03642호 | 호스팅제공자:
            (주)식스샵
          </p>
          <p>Copyright © 2020 NICE WEATHER, All rights reserved.</p>
        </div>
        <div className="right">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>FAQ</li>
            <li>1:1문의</li>
          </ul>
          <ul>
            <li>insta</li>
            <li>kakao</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
