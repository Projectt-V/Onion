import styled from 'styled-components';

export const NewPostBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  background: ${ (props) => props.theme.bodyBackground } ;
  border-right: 2px solid #717272;
`;

export const PostPreview1 = styled.div`
  margin-left: 2%;
  height: 70vh;
  width: 67vw;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23606060FF' stroke-width='10' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.09);
`;

export const PrevTitle = styled.h2`
  color: ${ (props) => props.theme.fontcolor } ;
`;

export const SelectFiles = styled.div`
  width: 32%;
  height: 40px;
  margin-top: 20px;
`

export const PostPreview2 = styled.div`
  margin-left: 2%;
  height: 70vh;
  width: 67vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CaptionBox = styled.div`
  height: 30px;
  width: 94.5%;
  background-color: rgba(0,0,0,0.11);
  display: flex;
  align-iitems: center;
  justify-content: center;
  padding:10px;
  margin-left: 2%;
  margin-top: 20px;
  margin-bottom: 30px;
  border-bottom: 3px solid #C0C0C0;
  color: ${ (props) => props.theme.fontcolor }
`;

export const PostButton = styled.div`
  display:flex;
  justify-content:space-between;
`;