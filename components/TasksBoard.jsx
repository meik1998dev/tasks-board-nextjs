import { Box, Grid } from '@mui/material';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { stages } from '../configs/stages';
import { useGetTodosAndDrag } from '../hooks/useGetTodosAndDrag';
import { Loader } from './Loader';
import { Stage } from './Stage/Stage';

const TasksBoard = () => {
   const { isLoading, error, onDragEnd, todos } = useGetTodosAndDrag();

   if (isLoading) {
      return <Loader />;
   }

   if (error) {
      return <span>Error: {error.message}</span>;
   }

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
