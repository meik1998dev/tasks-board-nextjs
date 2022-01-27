import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import styled from '@emotion/styled';

function MyApp({ Component, pageProps }) {
   const queryClient = new QueryClient();

   return (
      <QueryClientProvider client={queryClient}>
         <Head>
            <link
               rel='preconnect'
               href='https://fonts.gstatic.com'
               crossorigin
            />
            <link rel='preconnect' href='https://fonts.googleapis.com'></link>
            <link
               href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap'
               rel='stylesheet'></link>
            <link
               href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap'
               rel='stylesheet'></link>
         </Head>
         <Header>TODO LIST</Header>
         <Component {...pageProps} />
      </QueryClientProvider>
   );
}

export default MyApp;

const Header = styled.h1`
   font-family: Open Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 48px;
   line-height: 65px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
   width: fit-content;
   margin: 50px auto 20px;
`;
