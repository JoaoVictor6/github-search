import styled, {createGlobalStyle} from "styled-components";

export const Body = createGlobalStyle`
 body, * {
   background: #F3F3F3;
 }
`

export const Container = styled.div`
  margin:0px;
  padding: 0px;
  width: 100vw;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;