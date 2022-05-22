import { useQuery } from 'react-query';
import { fetchTodos, updateTodoStatus } from '../configs/apis';
import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';

export const useGetTodosAndDrag = () => {
   // get todos from the server
   const { isLoading, data, error } = useQuery('todos', fetchTodos);

   // local state contains todos
   const [todos, setTodos] = useState([]);

   /* A react hook that runs when the data changes. */
   useEffect(() => {
      setTodos(data);
   }, [data]);

   //updating task status
   const mutation = useMutation((data) => {
      updateTodoStatus(data);
   });

   const onDragEnd = (result) => {
      const { destination, draggableId } = result;

      if (!destination) {
         return;
      }

      //update local state
      const newList = [...todos];
      const draggedItem = newList.find((item) => item._id === draggableId);
      draggedItem.status = destination.droppableId;
      setTodos(newList);

      //update server state
      mutation.mutate({
         id: draggedItem._id,
         status: destination.droppableId,
      });
   };
   return { isLoading, error, onDragEnd, todos };
};
