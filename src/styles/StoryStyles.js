import styled from 'styled-components';

export const StoryBody  = styled.div` 
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

`;

export const AddStory  = styled.div` 
    padding:2%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor:pointer;

`;
export const UserStory  = styled.div` 
    padding:2%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor:pointer;

`;
export const StoryUsername  = styled.p` 
    font-size:12px;
    color:${ (props) => props.theme.fontcolor }

   

`;
