import { Box, Grid } from '@mui/material';
import React from 'react';
import { ReactQueryDevtools, useQuery } from 'react-query';
import { fetchTodos } from '../configs/apis';
import { Stage } from './Stage';

const TasksBoard = () => {
   const { isLoading, isError, data, error } = useQuery('todos', fetchTodos);

   if (isLoading) {
      return <span>Loading...</span>;
   }

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   return (
      <Box paddingTop={20} alignItems={'center'} justifyContent='center'>
         <Grid justifyContent={'center'} container spacing={10}>
            <Grid item>
               <Stage
                  data={data.filter((task) => task.status === 'todo')}
                  title='To Do'
                  description='Things that need to be done.'
                  color='#F66568'
               />
            </Grid>
            <Grid item>
               <Stage
                  data={data.filter((task) => task.status === 'doing')}
                  title='Doing'
                  description='What you are doing'
                  color='#FFC773'
               />
            </Grid>
            <Grid item>
               <Stage
                  data={data.filter((task) => task.status === 'done')}
                  title='Done'
                  description='Already done.'
                  color='#6BE795'
               />
            </Grid>
            <Grid item>
               <Stage
                  data={data.filter((task) => task.status === 'archive')}
                  title='Archive'
                  description='Not important but need to write down.'
                  color='#7389FF'
               />
            </Grid>
         </Grid>
      </Box>
   );
};

export default TasksBoard;
