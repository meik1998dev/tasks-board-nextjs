import React, { memo } from 'react';
import Modal from '@mui/material/Modal';
import { ModalContainer, Header, Input, Button } from './EditTask.style';
import { useEditTodo } from '../../hooks/useEditTodo';

const EditTask = ({ visible, close, title, subject, id }) => {
   const { inputsValue, handleInputChange, handleEditTodo } = useEditTodo({
      title,
      subject,
      id,
      close,
   });

   return (
      <Modal open={visible} onClose={close}>
         <ModalContainer>
            <Header>Edit Task</Header>
            <Input
               value={inputsValue?.title}
               name='title'
               placeholder='Something I have to do but I do not have time to do'
               onChange={handleInputChange}
            />
            <Input
               multiline
               rows={6}
               name='subject'
               value={inputsValue?.subject}
               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
               onChange={handleInputChange}
            />
            <Button onClick={handleEditTodo}>Edit</Button>
         </ModalContainer>
      </Modal>
   );
};

export default memo(EditTask);
