import React, { useState } from 'react';
import styled from 'styled-components';
import page_404 from '../../assets/img/not_internet.svg';

const StyledImg = styled.img`
  @media (min-width: 1024px) {
    width: 35%;
  }
  width: 85%;
`;
const PageLoader = ({ page_404_error, initial, titleError }) => {
  const [notLoadedImg, setNotLoadedImg] = useState(false);
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <StyledImg
        style={{ display: !notLoadedImg && page_404_error ? 'block' : 'none' }}
        src={page_404}
        loading="lazy"
        alt="…"
        height="100%"
        width="35%"
        onError={() => setNotLoadedImg(true)}
      />
      <img
        style={{ display: !page_404_error ? 'block' : 'none' }}
        src={initial ? '' : ''}
        loading="lazy"
        alt="…"
        height="90"
        width="90"
      />
      <div
        style={{
          display: page_404_error ? 'block' : 'none',
          fontFamily: 'roboto_regular',
          fontSize: '1rem',
          color: '#000',
        }}
      >
        {titleError}
      </div>
    </div>
  );
};

PageLoader.propTypes = {};

export default PageLoader;
