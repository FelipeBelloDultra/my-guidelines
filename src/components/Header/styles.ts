import styled from 'styled-components';

export const Container = styled.header`
  background: var(--color-secondary);
  padding: 25px 0 200px;

  > div {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
  }
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: var(--text-color-white);
  font-size: 20px;
  font-weight: bold;

  li {
    padding: 10px 5px;
    display: inline-block;
    width: 25%;
    text-align: center;
    margin: 0 10px 25px;

    span {
      cursor: pointer;
      user-select: none;
      transition: all 0.2s;
      border-bottom: 3px solid var(--color-secondary);

      &:hover {
        color: #fff;
        border-bottom-color: var(--color-primary);
      }
    }

    &:hover {
      aside {
        visibility: visible;
        transform: translate(0, 12px);
      }
    }
  }
`;
