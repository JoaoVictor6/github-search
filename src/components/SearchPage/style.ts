import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Img = styled.img`
  width: 283px;
  height: 276px;
  margin-bottom: 85px;
`;

export const InputText = styled.input`
  border-style: none;
  background: transparent;

  width: 342px;
  border: 1px solid #9d9d9d;
  font-size: 20px;
  color: #9d9d9d;

  border-radius: 50px;
  padding: 15px 30px;
  transition: color .5s;
  transition: border-color .1s;

  &:focus{
    outline: none;
    border-color: #0069CA;
    color: #0069CA;
  }
`;