import React from 'react';
import styled from '@emotion/styled';

export const Stage = () => {
   return (
      <div>
         <StageHeader>
            <Title>Stage Title</Title>
            {/* <Description>description</Description> */}
         </StageHeader>
      </div>
   );
};

const StageHeader = styled.div`
   border-left: 8px solid black;
   height: 56px;
`;

const Title = styled.p`
   font-family: Open Sans;
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 33px;
   /* identical to box height */

   display: flex;
   align-items: center;
   letter-spacing: 0.08em;

   /* Neutral/200 */

   color: #313131;
`;
