import React from 'react';
import styled from '@emotion/styled';
import { TaskCard } from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import add_icon from '../assets/add_icon.svg';
import Image from 'next/image';
import { AddTask } from './AddTask';

export const Stage = ({ title, description, color, data, type }) => {
   const [isAddMode, setIsAddMode] = React.useState(false);
   return (
      <StageContainer>
         <StageHeader color={color}>
            <div>
               <Title>{title}</Title>
               <Description>{description}</Description>
            </div>
            {type === 'todo' && (
               <Image onClick={() => setIsAddMode(true)} src={add_icon} />
            )}
         </StageHeader>
         <Droppable droppableId={type}>
            {(provided, snapshot) => (
               <TasksList
                  ref={provided.innerRef}
                  style={{
                     transition: 'ease 0.3s',
                     backgroundColor: snapshot.isDraggingOver
                        ? color + '1a'
                        : '#f8f9fa',
                  }}
                  {...provided.droppableProps}>
                  {data?.map(({ _id, title }, index) => (
                     <Draggable key={_id} index={index} draggableId={_id}>
                        {(provided, snapshot) => (
                           <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <TaskCard _id={_id} title={title} />
                           </div>
                        )}
                     </Draggable>
                  ))}
                  {provided.placeholder}
               </TasksList>
            )}
         </Droppable>
         <AddTask close={() => setIsAddMode(false)} visible={isAddMode} />
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
   width: '-webkit-fill-available',
   color: 'black',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
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
