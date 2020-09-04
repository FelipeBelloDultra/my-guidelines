import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  background: #fff;
  margin-top: -80px;
  border-radius: 4px;
  height: 350px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > h1 {
    padding: 20px;
    margin-left: 30px;
    color: var(--text-black);
    line-height: 34px;
    text-align: left;
  }
`;

export const ContainerText = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;

  span {
    width: 80%;
    font-size: 20px;
    color: #333;
    font-weight: 600;
    line-height: 25px;
    padding-right: 20px;
  }

  > div {
    border-left: 1px solid #000;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Footer = styled.footer`
  padding: 10px 20px;
  background: #ebebeb;
  display: flex;
  justify-content: space-between;

  a {
    padding: 5px 20px;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    font-weight: bold;
  }

  .linkedin {
    background: #0077b5;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#0077b5')};
    }
  }

  .github {
    background: #24292e;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#24292e')};
    }
  }
`;
