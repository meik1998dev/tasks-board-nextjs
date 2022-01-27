import { Box, Grid } from '@mui/material';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';
import { fetchTodos } from '../configs/apis';
import { stages } from '../configs/stages';
import { Stage } from './Stage';

const TasksBoard = () => {
   const { isLoading, isError, data, error } = useQuery('todos', fetchTodos);

   const [todos, setTodos] = React.useState([]);

   React.useEffect(() => {
      setTodos(data);
   });

   if (isLoading) {
      return <span>Loading...</span>;
   }

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      if (!destination) {
         return;
      }
      const newList = [...todos];
      const draggedItem = newList.find((item) => item._id === draggableId);
      draggedItem.status = destination.droppableId;
      setTodos(newList);
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         {todos && (
            <Box paddingTop={20} alignItems={'center'} justifyContent='center'>
               <Grid justifyContent={'center'} container spacing={10}>
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
