import styled from 'styled-components';

export const PaymentSection = styled.section`
  margin-bottom: 56px;

  display: flex;
  flex-direction: column-reverse;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 88px;
    flex-direction: row;
  }

  div {
    width: 100%;
    align-self: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      width: 640px;
    }
  }

  ol {
    list-style-position: outside;
  }

  h4 {
    display: inline;
  }

  li {
    margin-left: 26px;
    font-weight: 700;
    font-size: 18px;
    line-height: calc(23 / 18);
  }

  p {
    display: inline;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const DeliverySection = styled.section`
  width: 100%;
  display: block;
  text-align: left;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 32px;
  }

  h3 {
    margin-bottom: 24px;
    width: 100%;
    font-size: 24px;
    line-height: calc(31 / 24);
    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  & > details {
    width: 100%;
    @media screen and (min-width: 1440px) {
      width: 640px;
      //   height: clamp(96px, 96px, 441px);
    }
  }

  & > details ol {
    padding: 20px 0 44px 22px;
    max-height: 345px;
    box-sizing: border-box;
    background-color: #dad4c8;
    text-shadow: 0 4px 4px #00000025;
    overflow-y: scroll;
    word-wrap: break-word;

    @media screen and (min-width: 1440px) {
      padding: 20px 20px 20px 46px;
      height: 317px;
      background-color: inherit;
    }
  }

  details > summary {
    padding: 29.5px 20px 29.5px 25.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background-color: #dad4c8;
    list-style: none;
    cursor: pointer;

    p {
      margin-left: auto;
    }
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  details[open] {
    svg:last-child {
      transform: rotate(0deg);
    }
  }

  svg:last-child {
    padding: 7px 2px;
    transform: rotate(180deg);
  }
  svg:first-child {
    stroke: #101010;
    fill: transparent;
  }
`;
