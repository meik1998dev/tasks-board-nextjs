import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { TaskCard } from '../TaskCard/TaskCard';

export const DropableContainer = ({ category, todosArr, color }) => {
   return (
      <Droppable droppableId={category}>
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
               {todosArr?.map(({ _id, title, subject }, index) => (
                  <Draggable key={_id} index={index} draggableId={_id}>
                     {(provided) => (
                        <div
                           ref={provided.innerRef}
                           {...provided.draggableProps}
                           {...provided.dragHandleProps}>
                           <TaskCard
                              subject={subject}
                              _id={_id}
                              title={title}
                           />
                        </div>
                     )}
                  </Draggable>
               ))}
               {provided.placeholder}
            </TasksList>
         )}
      </Droppable>
   );
};

const TasksList = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top: 10px;
`;
