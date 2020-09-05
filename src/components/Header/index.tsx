import React from 'react';

import Dropdown from '../Dropdown';

import { Container, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Menu>
          <li>
            <span>GitHub</span>
            <Dropdown items={[{ title: 'Commit', link: '/version' }]} />
          </li>
          <li>
            <span>Programming</span>
            <Dropdown items={[{ title: 'React', link: '/programming' }]} />
          </li>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
