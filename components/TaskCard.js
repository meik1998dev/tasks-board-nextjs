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

export const TaskCard = ({ _id, title }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);

   console.log(anchorEl);
   return (
      <Task key={_id} title={title}>
         <TaskTitle>{title}</TaskTitle>
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
               <Box style={{ width: '150px' }} padding={2}>
                  <Box
                     justifyContent='space-around'
                     display='flex'
                     marginBottom={2}
                     alignItems='center'
                     flexDirection='row'>
                     <Typography>Delete</Typography>
                     <FontAwesomeIcon
                        style={{ cursor: 'pointer' }}
                        color='red'
                        icon={faTrashAlt}
                     />
                  </Box>
                  <Box>
                     <Link href=''>
                        <Box
                           justifyContent='space-around'
                           display='flex'
                           alignItems='center'
                           flexDirection='row'>
                           <Typography>Edit</Typography>
                           <FontAwesomeIcon color='teal' icon={faPen} />
                        </Box>
                     </Link>
                  </Box>
               </Box>
            </PopoverMenu>
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
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 160%;
`;

const MenuIcon = styled.div`
   cursor: pointer;
`;

const PopoverMenu = styled(Popover)(({ theme }) => ({
   background: '#FFFFFF',
   width: 'fit-content',
   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
   backdropFlter: 'blur(4px)',
   height: '151px',
   width: '171px',
}));
