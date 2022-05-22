import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../configs/apis';

export const useEditTodo = () => {
   const queryClient = useQueryClient();

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

   if (isLoading) {
      return <h1>Loading...</h1>;
   }

   return { mutate };
};
