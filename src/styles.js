import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  margin-top: 20px;

`;

export const Combo = styled.div`
  width: 220px;
`;

export const Title = styled.div` 
  margin-top: 20px;
  display: flex;
  background: #009999;
  padding: 10px;  
  cursor: pointer;
    
 span{
    flex: 1;
    display: flex;
    color:#fff;
    margin-right: 120px;
    width: 220px;
  }
    
`;

export const List = styled.li`
  
    display: flex;
    background: rgba(0,0,0,0.2);
    padding: 10px;
    width: 220px;

    &:hover {
      background: rgba(0,153,153,0.6);
    }


`;
