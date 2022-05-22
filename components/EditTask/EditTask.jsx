import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { ModalContainer, Header, Input, Button } from './EditTask.style';
import { useEditTodo } from '../../hooks/useEditTodo';

export const EditTask = ({ visible, close, title, subject, id }) => {
   const [inputsValue, setInputsValue] = useState({
      title: title,
      subject: subject,
   });

   const { mutate } = useEditTodo();

   const handleEditTodo = () => {
      mutate({
         id: id,
         title: inputsValue.title,
         subject: inputsValue.subject,
      });
      close();
   };

   /**
    * When the input changes, update the state with the new value.
    */
   const handleInputChange = ({ target }) => {
      setInputsValue({
         ...inputsValue,
         [target.name]: target.value,
      });
   };

   return (
      <Modal open={visible} onClose={close}>
         <ModalContainer>
            <Header>Edit Task</Header>
            <Input
               defaultValue={inputsValue.title}
               name='title'
               placeholder='Something I have to do but I do not have time to do'
               onChange={handleInputChange}
            />
            <Input
               multiline
               rows={6}
               name='subject'
               defaultValue={inputsValue.subject}
               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
               onChange={handleInputChange}
            />
            <Button onClick={handleEditTodo}>Edit</Button>
         </ModalContainer>
      </Modal>
   );
};
