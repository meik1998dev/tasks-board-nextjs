import React from 'react';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { updateTodo } from '../configs/apis';
import { useMutation, useQueryClient } from 'react-query';

export const EditTask = ({ visible, close, title, subject, id }) => {
   const [inputsValue, setInputsValue] = React.useState({
      title: '',
      subject: '',
   });

   const queryClient = useQueryClient();

   const mutation = useMutation(
      async (data) => {
         updateTodo(data);
      },
      {
         onSuccess: () => {
            setTimeout(() => {
               queryClient.refetchQueries();
            }, 1000);
         },
      },
   );

   if (mutation.isLoading) {
      return <h1>Loading...</h1>;
   }

   return (
      <Modal open={visible} onClose={close}>
         <ModalContainer>
            <Header>Edit Task</Header>
            <Input
               defaultValue={title}
               placeholder='Something I have to do but I do not have time to do'
               onChange={(event) =>
                  setInputsValue({ ...inputsValue, title: event.target.value })
               }
            />
            <Input
               multiline
               rows={6}
               defaultValue={subject}
               placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
               onChange={(event) =>
                  setInputsValue({
                     ...inputsValue,
                     subject: event.target.value,
                  })
               }
            />
            <Button
               onClick={() => {
                  mutation.mutate({
                     id: id,
                     title: inputsValue.title,
                     subject: inputsValue.subject,
                  });
                  close();
               }}>
               Edit
            </Button>
         </ModalContainer>
      </Modal>
   );
};

const ModalContainer = styled.div`
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

const Header = styled.h2`
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

const Input = styled(TextField)(() => ({
   background: ' #FFFFFF',
   borderRadius: '7px',
   width: `100%`,
   fontSize: '18px',
   marginBottom: '20px',
}));

const Button = styled.button`
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
