import styled from 'styled-components';

export const Container = styled.aside`
  transition: transform 0.2s;
  visibility: hidden;
  width: 200px;
  position: absolute;
  background: #fff;
  color: #333;
  transform: translate(0, 40px);
  z-index: 2;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    top: -10px;
    left: 80px;
    position: absolute;
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0px 20px 20px 20px;
    height: 0px;
    width: 0px;
  }
`;
