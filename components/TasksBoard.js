import { Grid } from '@mui/material';
import React from 'react';
import {Stage} from './Stage';

const TasksBoard = () => {
   return (
      <Grid container>
         <Grid item><Stage/></Grid>
         <Grid item></Grid>
         <Grid item></Grid>
         <Grid item></Grid>
      </Grid>
   );
};

export default TasksBoard;
