import { deleteTodo } from '../configs/apis';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteTodo = ({handleClose , _id}) => {
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((id) => deleteTodo(id), {
      onSuccess: () => queryClient.invalidateQueries('todos'),
   });

   const handleDelete = () => {
      mutate(_id);
      handleClose();
   };
   return { mutate, isLoading , handleDelete };
};
