import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { ModalContainer, Header, Input, Button } from './AddTask.style';
import { useAddTodo } from '../../hooks/useAddTodo';

export const AddTask = ({ visible, close }) => {
   const [inputsValue, setInputsValue] = useState({
      title: '',
      subject: '',
   });

   const { mutateAsync } = useAddTodo();

   /**
    * When the input changes, update the state with the new value.
    */
   const handleInputChange = ({ target }) => {
      setInputsValue({
         ...inputsValue,
         [target.name]: target.value,
      });
   };

   /**
    * It takes the values from the inputs and adds them to the database.
    */
   const handleAddTodo = () => {
      mutateAsync({
         title: inputsValue.title,
         subject: inputsValue.subject,
      });
      close();
   };

   return (
      <Modal open={visible} onClose={close}>
         <ModalContainer>
            <Header>Add Task</Header>
            <Input
               name='title'
               placeholder='Something I have to do but I do not have time to do'
               onChange={handleInputChange}
            />
            <Input
               multiline
               rows={6}
               name='subject'
               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
               onChange={handleInputChange}
            />
            <Button onClick={handleAddTodo}>Add</Button>
         </ModalContainer>
      </Modal>
   );
};
