import React from 'react';

import { Container, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Menu>
          <li>
            <span>GitHub</span>
          </li>
          <li>
            <span>Programming</span>
          </li>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
