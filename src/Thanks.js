import React from 'react';
import styled from 'styled-components';
import Background from './Background';

const Title = styled.h1`
  color: #fff;
`;

const Subtitle = styled.h1`
  color: #fff;
`;

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const Thanks = () => {
  return (
    <Background background="#03d69d">
      <Title>Thanks</Title>
      <Subtitle>We are hiring!</Subtitle>
      <Img src="./img/hiring-qrcode.png" />
      <Link href="https://woovi.com/jobs" target="_blank">
        <h2>woovi.com/jobs</h2>
      </Link>
    </Background>
  );
};

export default Thanks;
