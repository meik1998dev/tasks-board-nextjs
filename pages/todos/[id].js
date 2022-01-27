import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { NextSeo } from 'next-seo';
import { fetchTodo } from '../../configs/apis';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { Loader } from '../../components/Loader';

const TaskDetails = () => {
   const router = useRouter();

   const { isLoading, isError, data, error } = useQuery('todo', () =>
      fetchTodo(router.query.id),
   );

   if (!isLoading) return <Loader />;

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   return (
      <>
         <NextSeo title='Task details' description='Todos Board' />
         <Wrapper>
            <Header>Task Details</Header>
            <TaskContainer>
               <Section>
                  <Title>Name</Title>
                  <Paragrapgh>{data.title}</Paragrapgh>
               </Section>
               <Section>
                  <Title>Subject</Title>
                  <Paragrapgh>{data.subject}</Paragrapgh>
               </Section>
               <Section>
                  <Title>States</Title>
                  <Paragrapgh>{data.status}</Paragrapgh>
               </Section>
            </TaskContainer>
            <BackBtn onClick={() => router.back()}>Back</BackBtn>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 80%;
   margin: 0 auto;
`;

const Header = styled.h2`
   font-family: Open Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 48px;
   line-height: 65px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
`;

const TaskContainer = styled.div`
   background: #f8f9fa;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 16px;
   padding: 25px 40px;
   margin-bottom: 40px;
`;
const Title = styled.h4`
   font-family: Open Sans;
   font-style: normal;
   font-weight: bold;
   margin-bottom: 0px;
   font-size: 18px;
   line-height: 25px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
`;
const Paragrapgh = styled.p`
   margin-bottom: 40px;
`;
const Section = styled.div``;
const BackBtn = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 10px;
   outline: none;
   border: none;
   width: 139px;
   cursor: pointer;
   height: 45px;
   align-self: end;
   background: #1695bd;
   border-radius: 16px;
   font-family: Open Sans;
   font-style: normal;
   font-weight: 800;
   font-size: 18px;
   line-height: 25px;
   color: white;
`;
export default TaskDetails;
