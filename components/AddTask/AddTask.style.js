import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const ModalContainer = styled.div`
   background: #f8f9fa;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 37px;
   outline: none;
   width: 40%;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -60%);
   padding: 35px;
   display: flex;
   flex-direction: column;
`;

export const Header = styled.h2`
   font-family: Open Sans;
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 33px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
   color: #000000;
`;

export const Input = styled(TextField)(() => ({
   background: ' #FFFFFF',
   borderRadius: '7px',
   width: `100%`,
   fontSize: '18px',
   marginBottom: '20px',
}));

export const Button = styled.button`
   width: 107px;
   height: 35px;
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 21px;
   letter-spacing: 0.08em;
   color: #ffffff;
   align-self: end;
   border: none;
   background: #5eb149;
   border-radius: 4px;
   cursor: pointer;
`;
