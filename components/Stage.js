import React from 'react';
import styled from '@emotion/styled';
import { TaskCard } from './TaskCard';

export const Stage = ({ title, description, color, data }) => {
   return (
      <StageContainer>
         <StageHeader color={color}>
            <Title>{title}</Title>
            <Description>{description}</Description>
         </StageHeader>
         <TasksList>
            {data?.map(({ _id, title }) => (
               <TaskCard _id={_id} title={title} />
            ))}
         </TasksList>
      </StageContainer>
   );
};

const StageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 32px;
   width: 414px;
   min-height: 334px;
   background: #f8f9fa;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 16px;
`;

const StageHeader = styled.div((props) => ({
   borderLeft: `8px solid ${props.color || 'black'}`,
   paddingLeft: '15px',
   height: '56px',
   color: 'black',
   display: 'flex',
   flexDirection: 'column',
}));

const Title = styled.p`
   font-family: Open Sans;
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 33px;
   letter-spacing: 0.08em;
   margin: 0;
`;
const Description = styled.p`
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 13px;
   line-height: 15px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
   color: #757575;
`;

const TasksList = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top: 10px;
`;
