import styled from "styled-components";

export const FooterMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 130px;
`;

export const FooterEmailBlock = styled.div`
  background-color: #dad4c8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;

  h1 {
    color: #101010;
    font-family: "Rubik";
    font-size: 55px;
    line-height: 63px;
    font-weight: 600;
  }
  p {
    color: #101010;
    font-family: "Rubik";
    font-size: 17px;
    line-height: 21px;
    font-weight: 400;
  }
`;

export const EmailBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  input {
    height: 48px;
    width: 528px;
    border: none;
    margin-right: 40px;
    padding: 0px 15px;
    color: #81807e;
    background-color: white !important;
    padding-left: 30px;
    font-family: "Rubik";
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .email_img {
    background: url(img/email.png) left no-repeat;
    color: #81807e;
  }
  button {
    background-color: #2d3f24;
    color: white;
    border: none;
    height: 48px;
    width: 231px;
    font-family: "Rubik";
    font-size: 19px;
    line-height: 19px;
    font-weight: 400;
  }
`;

export const MainFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #2d3f24;
  color: white;
  padding: 80px;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Rubik";
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .address_inf {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    p {
      font-family: "Rubik";
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }
  .icons {
    margin-top: 15px;
    img {
      margin-right: 10px;
      width: 24px;
      height: 24px;
    }
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Rubik";
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    font-family: "Rubik";
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-bottom: 8px;
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Rubik";
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    font-family: "Rubik";
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-bottom: 8px;
  }
`;
