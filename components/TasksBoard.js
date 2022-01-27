import { Box, Grid } from '@mui/material';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';
import { fetchTodos, updateTodoStatus } from '../configs/apis';
import { useMutation, useQueryClient } from 'react-query';
import { stages } from '../configs/stages';
import { Stage } from './Stage';
import { Loader } from './Loader';

const TasksBoard = () => {
   const { isLoading, isError, data, error } = useQuery('todos', fetchTodos);

   //updating task status
   const mutation = useMutation((data) => {
      updateTodoStatus(data);
   });

   const [todos, setTodos] = React.useState([]);

   React.useEffect(() => {
      setTodos(data);
   });

   if (isLoading) {
      return <Loader/>;
   }

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;

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

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         {todos && (
            <Box paddingTop={5} alignItems={'center'} justifyContent='center'>
               <Grid justifyContent={'center'} container spacing={3}>
                  {stages.map(({ type, title, description, color }) => (
                     <Grid key={type} item>
                        <Stage
                           type={type}
                           data={todos.filter((task) => task.status === type)}
                           title={title}
                           description={description}
                           color={color}
                        />
                     </Grid>
                  ))}
               </Grid>
            </Box>
         )}
      </DragDropContext>
   );
};

export default TasksBoard;
