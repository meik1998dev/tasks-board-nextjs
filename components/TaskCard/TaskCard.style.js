import { Popover } from '@mui/material';
import styled from '@emotion/styled';

export const Task = styled.div`
   background: #ffffff;
   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   border-radius: 16px;
   padding: 3px 24px;
   margin: 10px 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const TaskTitle = styled.p`
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

export const MenuIcon = styled.div`
   cursor: pointer;
   width: 2%;
`;

export const PopoverMenu = styled(Popover)(() => ({
   background: '#FFFFFF',
   height: '151px',
   width: '171px',
}));
