import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const Repository = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 5px -3px #000;
  border-radius: 5px;
  width: 70%;
  margin: 0 auto 16px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px 0px 10px;
  && > svg{
    color: #383838;
    font-size: 18px;
  }

  && > svg:hover{
    color: #1A1C1E;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
 color: #383838;
 font-weight: 500;
 font-size: 18px;
 margin-top: 5px;
 margin-bottom: 4px;

 && > a:hover {
   color: #1A1C1E;
 }
`;

export const Link = styled.a`
  &&{
    text-decoration: none;
    color: #383838;
  }
  &&:hover{
    text-decoration: none;
  }

  &&:visited{
    color: #383838;
  }
`;

export const Description = styled.div`
  font-style: italic;
  font-size: 15px;
  color: #3F3F3F;
  margin-left: 10px;
`;

export const Footer = styled.div`
  margin: 20px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  font-size: 13px;
  color: #3F3F3F;
`;