import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IDropdownProps {
  title: string;
  link: string;
}

interface IItems {
  items: IDropdownProps[];
}

const Dropdown: React.FC<IItems> = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <Link key={item.title} to={item.link}>
          {item.title}
        </Link>
      ))}
    </Container>
  );
};

export default Dropdown;
