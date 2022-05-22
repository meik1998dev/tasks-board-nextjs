import styled from '@emotion/styled';

export const StageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 32px;
   width: 400px;
   min-height: 334px;
   background: #f8f9fa;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 16px;
`;

export const StageHeader = styled.div((props) => ({
   borderLeft: `8px solid ${props.color || 'black'}`,
   paddingLeft: '15px',
   height: '56px',
   width: '-webkit-fill-available',
   color: 'black',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
}));

export const Title = styled.p`
   font-family: Open Sans;
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 33px;
   letter-spacing: 0.08em;
   margin: 0;
`;
export const Description = styled.p`
   font-family: Roboto;
   font-style: normal;
   font-weight: normal;
   font-size: 13px;
   line-height: 15px;
   display: flex;
   align-items: center;
   letter-spacing: 0.08em;
   color: #757575;
`;
