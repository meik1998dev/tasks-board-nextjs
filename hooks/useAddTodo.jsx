import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTodos } from '../configs/apis';

export const useAddTodo = ({ close }) => {
   const queryClient = useQueryClient();

   const [inputsValue, setInputsValue] = useState({
      title: '',
      subject: '',
   });

   /**
    * When the input changes, update the state with the new value.
    */
   const handleInputChange = ({ target }) => {
      setInputsValue({
         ...inputsValue,
         [target.name]: target.value,
      });
   };

   /* A hook that is used to add todos to the database. */
   const { mutateAsync } = useMutation(async (data) => addTodos(data), {
      onSuccess: () => {
         setTimeout(() => {
            queryClient.refetchQueries();
         }, 2000);
      },
   });

   /**
    * It takes the values from the inputs and adds them to the database.
    */
   const handleAddTodo = () => {
      mutateAsync({
         title: inputsValue.title,
         subject: inputsValue.subject,
      });
      close();
      setInputsValue({ title: '', subject: '' });
   };

   return { handleAddTodo, inputsValue, handleInputChange };
};
