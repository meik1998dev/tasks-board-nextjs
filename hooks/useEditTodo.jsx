import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../configs/apis';

export const useEditTodo = ({ title, subject, id, close }) => {
   const queryClient = useQueryClient();

   const [inputsValue, setInputsValue] = useState({
      title: title,
      subject: subject,
   });

   const { mutate, isLoading } = useMutation(
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

   if (isLoading) {
      return <h1>Loading...</h1>;
   }

   return { handleEditTodo, handleInputChange, inputsValue };
};
