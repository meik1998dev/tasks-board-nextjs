import { deleteTodo } from '../configs/apis';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteTodo = () => {
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((id) => deleteTodo(id), {
      onSuccess: () => queryClient.invalidateQueries('todos'),
   });

   return { mutate, isLoading };
};
