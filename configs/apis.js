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
