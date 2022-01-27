import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisV,
   faTrashAlt,
   faPen,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Popover, Typography } from '@mui/material';
import Link from 'next/link';
import { deleteTodo } from '../configs/apis';
import { useMutation, useQueryClient } from 'react-query';
import { EditTask } from './EditTask';

export const TaskCard = ({ _id, subject, title }) => {
   const [isEditMode, setIsEditMode] = React.useState(false);

   const router = useRouter();

   //Popover states manegment
   const [anchorEl, setAnchorEl] = React.useState(null);
   const queryClient = useQueryClient();
   const handleClick = (event) => setAnchorEl(event.currentTarget);
   const handleClose = () => setAnchorEl(null);
   const open = Boolean(anchorEl);

   //deleting task
   const mutation = useMutation((id) => deleteTodo(id), {
      onSuccess: () => queryClient.invalidateQueries('todos'),
   });

   if (mutation.isLoading) {
      return <h1>Deleting ...</h1>;
   }

   return (
      <Task title={title}>
         <TaskTitle onClick={() => router.push(`todos/${_id}`)}>
            {title}
         </TaskTitle>
         <MenuIcon>
            <FontAwesomeIcon onClick={handleClick} icon={faEllipsisV} />
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
                     onClick={() => {
                        mutation.mutate(_id);
                        handleClose();
                     }}
                     justifyContent='space-around'
                     display='flex'
                     marginBottom={2}
                     alignItems='center'
                     style={{ cursor: 'pointer', margin: 0 }}
                     flexDirection='row'>
                     <p>Delete</p>
                     <FontAwesomeIcon color='red' size='sm' icon={faTrashAlt} />
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
                        <FontAwesomeIcon color='teal' size='sm' icon={faPen} />
                     </Box>
                  </Box>
               </Box>
            </PopoverMenu>
            <EditTask
               title={title}
               subject={subject}
               close={() => setIsEditMode(false)}
               visible={isEditMode}
               id={_id}
            />
         </MenuIcon>
      </Task>
   );
};

const Task = styled.div`
   background: #ffffff;
   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   border-radius: 16px;
   padding: 16px 24px;
   margin: 20px 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const TaskTitle = styled.p`
   cursor: pointer;
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   width: 100%;
   line-break: anywhere;
   padding-right: 15px;
   line-height: 160%;
`;

const MenuIcon = styled.div`
   cursor: pointer;
   width: 2%;
`;

const PopoverMenu = styled(Popover)(({ theme }) => ({
   background: '#FFFFFF',
   width: 'fit-content',
   height: '151px',
   width: '171px',
}));
