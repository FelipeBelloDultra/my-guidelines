import React from 'react';

import heartSvgIcon from '../../assets/svg/heart.svg';
import Header from '../../components/Header';

import { Container, ContainerText, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>
          My <br />
          Guidelines
        </h1>

        <ContainerText>
          <span>
            This project is being developed mainly as a way to document the
            patterns I use in my projects (commits, writing, design patterns,
            etc).
          </span>

          <div>
            <img src={heartSvgIcon} alt="Heart" />
          </div>
        </ContainerText>

        <Footer>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/felipebellodultra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="github"
            href="https://github.com/FelipeBelloDultra"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
