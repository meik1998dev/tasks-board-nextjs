import React, { memo } from 'react';
import Modal from '@mui/material/Modal';
import { ModalContainer, Header, Input, Button } from './AddTask.style';
import { useAddTodo } from '../../hooks/useAddTodo';

const AddTask = ({ visible, close }) => {
   const { handleAddTodo, inputsValue, handleInputChange } = useAddTodo({close});

   return (
      <Modal open={visible} onClose={close}>
         <ModalContainer>
            <Header>Add Task</Header>
            <Input
               value={inputsValue.title}
               name='title'
               placeholder='Something I have to do but I do not have time to do'
               onChange={handleInputChange}
            />
            <Input
               multiline
               rows={6}
               value={inputsValue.subject}
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

export default memo(AddTask);
