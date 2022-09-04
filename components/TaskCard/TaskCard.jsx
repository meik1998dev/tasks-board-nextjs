import { useRouter } from 'next/router';
import { Task, TaskTitle, MenuIcon, PopoverMenu } from './TaskCard.style';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisV,
   faTrashAlt,
   faPen,
} from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';
import EditTask from '../EditTask/EditTask';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { usePopoverState } from '../../hooks/usePopoverState';

export const TaskCard = ({ _id, subject, title }) => {
   const [isEditMode, setIsEditMode] = useState(false);

   const router = useRouter();

   const { anchorEl, handleClick, handleClose, open } = usePopoverState();

   const { isLoading, handleDelete } = useDeleteTodo({ handleClose, _id });

   if (isLoading) {
      return <p>Deleting ...</p>;
   }

   return (
      <Task title={title}>
         <TaskTitle onClick={() => router.push(`todos/${_id}`)}>
            {title}
         </TaskTitle>
         <MenuIcon>
            <FontAwesomeIcon
               onClick={handleClick}
               width='30px'
               icon={faEllipsisV}
            />
            <PopoverMenu
               key={_id}
               id={_id}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}>
               <Box style={{ width: '120px' }}>
                  <Box
                     onClick={handleDelete}
                     justifyContent='space-around'
                     display='flex'
                     marginBottom={2}
                     alignItems='center'
                     style={{ cursor: 'pointer', margin: 0 }}
                     flexDirection='row'>
                     <p>Delete</p>
                     <FontAwesomeIcon
                        color='red'
                        style={{ width: '20px' }}
                        icon={faTrashAlt}
                     />
                  </Box>
                  <Box
                     onClick={() => {
                        setIsEditMode(true);
                        handleClose();
                     }}>
                     <Box
                        justifyContent='space-around'
                        display='flex'
                        style={{ cursor: 'pointer', margin: 0 }}
                        alignItems='center'
                        flexDirection='row'>
                        <p>Edit</p>
                        <FontAwesomeIcon
                           color='teal'
                           style={{ width: '20px' }}
                           icon={faPen}
                        />
                     </Box>
                  </Box>
               </Box>
            </PopoverMenu>
            {isEditMode && (
               <EditTask
                  title={title}
                  subject={subject}
                  close={() => setIsEditMode(false)}
                  visible={isEditMode}
                  id={_id}
               />
            )}
         </MenuIcon>
      </Task>
   );
};
