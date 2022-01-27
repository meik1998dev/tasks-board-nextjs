import axios from 'axios';
import { BASE_URL, API_KEY } from './urls';

export const fetchTodos = async () => {
   try {
      const res = await axios.get(BASE_URL + 'todos', {
         params: { key: API_KEY },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteTodo = async (id) => {
   try {
      await axios.delete(BASE_URL + 'todos/' + id, {
         params: { key: API_KEY },
      });
   } catch (error) {
      console.log(error);
   }
};

export const fetchTodo = async (id) => {
   try {
      if (id) {
         const res = await axios.get(BASE_URL + 'todos/' + id, {
            params: { key: API_KEY },
         });
         return res.data;
      }
   } catch (error) {
      console.log(error);
   }
};

export const updateTodoStatus = async ({id , status}) => {
   try {
      await axios.patch(
         BASE_URL + 'todos/' + id,
         {
            status: status,
         },
         {
            params: { key: API_KEY },
         },
      );
   } catch (error) {
      console.log(error);
   }
};
