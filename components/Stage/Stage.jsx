import React, { useState } from 'react';
import {
   StageContainer,
   StageHeader,
   Title,
   Description,
} from './Stage.style.js';
import Image from 'next/image';
import { AddTask } from '../AddTask/AddTask';
import { DropableContainer } from '../DropableContainer/DropableContainer';
import add_icon from '../../assets/add_icon.svg'

export const Stage = ({ title, description, color, data, type }) => {
   const [isAddMode, setIsAddMode] = useState(false);

   return (
      <StageContainer>
         <StageHeader color={color}>
            <div>
               <Title>{title}</Title>
               <Description>{description}</Description>
            </div>
            {type === 'todo' && (
               <Image
                  alt='edit'
                  onClick={() => setIsAddMode(true)}
                  src={add_icon}
               />
            )}
         </StageHeader>

         <DropableContainer category={type} todosArr={data} color={color} />

         <AddTask close={() => setIsAddMode(false)} visible={isAddMode} />
      </StageContainer>
   );
};
