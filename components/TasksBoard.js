import { Box, Grid } from '@mui/material';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';
import { fetchTodos } from '../configs/apis';
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
      const newList = [...todos]
      const draggedItem = newList.find((item) => item._id === draggableId);
      draggedItem.status = destination.droppableId;
      setTodos(newList);
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         {todos && (
            <Box paddingTop={20} alignItems={'center'} justifyContent='center'>
               <Grid justifyContent={'center'} container spacing={10}>
                  <Grid item>
                     <Stage
                        type='todo'
                        data={todos.filter((task) => task.status === 'todo')}
                        title='To Do'
                        description='Things that need to be done.'
                        color='#F66568'
                     />
                  </Grid>
                  <Grid item>
                     <Stage
                        type='doing'
                        data={todos.filter((task) => task.status === 'doing')}
                        title='Doing'
                        description='What you are doing'
                        color='#FFC773'
                     />
                  </Grid>
                  <Grid item>
                     <Stage
                        type='done'
                        data={todos.filter((task) => task.status === 'done')}
                        title='Done'
                        description='Already done.'
                        color='#6BE795'
                     />
                  </Grid>
                  <Grid item>
                     <Stage
                        type='archive'
                        data={todos.filter((task) => task.status === 'archive')}
                        title='Archive'
                        description='Not important but need to write down.'
                        color='#7389FF'
                     />
                  </Grid>
               </Grid>
            </Box>
         )}
      </DragDropContext>
   );
};

export default TasksBoard;
