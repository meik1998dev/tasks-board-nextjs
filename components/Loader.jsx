import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

export const Loader = () => {
   return (
      <LoaderContainer>
         <CircularProgress size={100} color='success' />
      </LoaderContainer>
   );
};

const LoaderContainer = styled.div`
   background-color: rgb(162 162 162 / 33%);
   backdrop-filter: blur(10px);
   height: 100%;
   width: 100%;
   position: fixed;
   top: 0%;
   left: 0;
   z-index: 10;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: fadeIn;
   animation-duration: 0.5s;
`;
