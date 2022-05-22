import { useMutation, useQueryClient } from 'react-query';
import { addTodos } from '../configs/apis';

export const useAddTodo = () => {
   const queryClient = useQueryClient();

   const { mutateAsync } = useMutation(async (data) => addTodos(data), {
      onSuccess: () => {
         setTimeout(() => {
            queryClient.refetchQueries();
         }, 2000);
      },
   });
   return { mutateAsync };
};
