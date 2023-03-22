import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
`;

const Website = () => {
  return (
    <>
      <h1>Website</h1>
      <Img src="./img/website-qrcode.png" />
      <Link href="https://fersilva.dev" target="_blank">
        <h2>fersilva.dev</h2>
      </Link>
    </>
  );
};

export default Website;
