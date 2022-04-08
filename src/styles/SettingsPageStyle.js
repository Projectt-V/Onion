import styled from 'styled-components';

export const Editable = styled.table`
   margin-top: 20px;
   width: 60%; 
`;

export const EditableRow = styled.tr`
    margin-top: 10px;
    padding: 50px;
`;

export const EditableRowTitle = styled.td`
   font-size: 20px;
   font-weight: 200px;
   font-color: black;
   padding: 20px;
`;

export const EditableRowComps = styled.td`
   font-size: 15px;
   font-color: #575757;
   padding: 20px;
`;

export const AutoGraph = styled.textarea`\
    width: 100%;
    background-color: #E8E8E8;
    height: 250px;
    border-radius: 10px;
    resize: none;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15px;
    font-color: #575757;
`;
