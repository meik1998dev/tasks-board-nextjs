import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TasksBoard from '../components/TasksBoard';
import { ReactQueryDevtools } from 'react-query/devtools'

export default function Home() {
   return (
      <div className={styles.container}>
         <TasksBoard />
         <ReactQueryDevtools initialIsOpen={false} />
      </div>
   );
}
