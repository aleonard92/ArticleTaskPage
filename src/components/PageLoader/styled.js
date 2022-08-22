import React from 'react';
import styled, { keyframes } from 'styled-components';

const RootLoader = styled.div`
  height: 80vh;
`;

const LoaderContainer = styled.div`
  height: 100%;
  transition: opacity 200ms cubic-bezier(0, -0.26, 0.32, 1.22);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  position: absolute;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const loader = keyframes`
    0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
`;

const LoaderImage = styled.div`
  margin-top: 9px;
  margin-left: 7px;
  height: 100px;
  width: 100px;

  .text span {
    color: #3498db;
    font-size: 0.72rem;
  }

  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 2px;
  width: 100px;
  height: 100px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: #6129ff;
    transform: scale(0);
    transform-origin: center center;
    animation: ${loader} 2s infinite linear;

    &:nth-of-type(7) {
    }

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }
`;

export { RootLoader, LoaderContainer, Loader, LoaderImage };
