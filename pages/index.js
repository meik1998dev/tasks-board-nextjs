import styles from '../styles/Home.module.css';
import TasksBoard from '../components/TasksBoard';
import { NextSeo } from 'next-seo';

export default function Home() {
   return (
      <>
         <NextSeo title='Todo App' description='Todos Board' />
         <div className={styles.container}>
            <TasksBoard />
         </div>
      </>
   );
}
