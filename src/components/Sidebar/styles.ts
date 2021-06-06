import styled from "styled-components";

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 1px 0px 1px -1px rgba(0,0,0,0.55);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
  color: #383838;
`;

export const Header = styled.div`
  display: flex;
  margin: 20px 16px;
  width: calc(100% - 32px);
  font-size: 18px;
`

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`

export const UserNumbers = styled.div`
  width: calc(100%);
  text-align: center;
`;

export const InfoTitles = styled.h1`
  &&:first-child{
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 26px;
    margin-top: 0;
  }
  margin: 0px;
  margin-top: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
`

export const Content = styled.div`
 margin: 0 16px;
 width: calc(100% - 32px);
`

export const Bio = styled.p`
  text-align: center;
  font-style: italic;
  color: #4A4A4A;
  font-size: 20px;
  margin: 0;
`

export const Name = styled.h1`
  color: #303030;
  font-size: 20px;
  font-weight: normal;
  margin-top: 0px;
  text-align: center;
  margin: 10px;
`

export const FooterInformation = styled.div`
  margin-top: 7em;
  font-size: 19px;
  font-weight: 500;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 30%;
  && > a{
    text-decoration: none;
    color: #383838;
  }

  && > a:hover{
    color: #000;
  }

  && > a:nth-child(2):hover {
    color: #2E9BFF;
  }

  && > a > svg{
    font-size: 36px;
  }
` 