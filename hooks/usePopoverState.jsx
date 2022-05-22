import React from 'react';

export const usePopoverState = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => setAnchorEl(event.currentTarget);

   const handleClose = () => setAnchorEl(null);
   
   const open = Boolean(anchorEl);

   return { anchorEl, handleClick, handleClose, open };
};
