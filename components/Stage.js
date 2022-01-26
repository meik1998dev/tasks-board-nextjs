import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Stage = (props) => {
   return (
      <StageContainer>
         <StageHeader>
            <Title>Stage Title</Title>
            <Description>description</Description>
         </StageHeader>
         <TasksList>
            <Task>
               <TaskTitle>
                  Task description is very simple to sdfaaaaa aa aaaaaa aaaaaaaa
                  aaaaaa aaaaaaaaa a d escr ipe
               </TaskTitle>
            </Task>
            <Task>
               <TaskTitle>
                  Task description is very simple to descripe
               </TaskTitle>
               <FontAwesomeIcon icon={["far", "coffee"]} />
            </Task>
            <Task>
               <TaskTitle>
                  Task description is very simple to descripe
               </TaskTitle>
            </Task>
            <Task>
               <TaskTitle>
                  Task description is very simple to descripe
               </TaskTitle>
            </Task>
         </TasksList>
      </StageContainer>
   );
};

const StageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 32px;
   position: absolute;
   width: 414px;
   min-height: 334px;
   left: 37px;
   top: 265px;
   background: #f8f9fa;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 16px;
`;

const StageHeader = styled.div((props) => ({
   borderLeft: '8px solid black',
   paddingLeft: '15px',
   height: '56px',
   color: props.color || 'black',
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

const Task = styled.div`
   background: #ffffff;
   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   border-radius: 16px;
   padding: 16px 24px;
   margin: 20px 0;
   width: 100%;
`;

const TaskTitle = styled.p`
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 160%;
`;
