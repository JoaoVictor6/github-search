import styled from 'styled-components';
import style from '../../style/styleConfiguration';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Img = styled.img`
  width: ${style.logo.header.width};
  height: ${style.logo.header.height};
  margin-bottom: 85px;
`;

export const InputText = styled.input`
  border-style: none;

  width: ${style.input.size.large};
  border: 1px solid ${style.input.color.default};
  font-size: ${style.input.fontSize.large};
  color: ${style.input.color.default};

  border-radius: 50px;
  padding: 15px 30px;
  transition: color .5s;
  transition: border-color .1s;
  &:focus{
    outline: none;
    border-color: ${style.input.color.onFocus};
    color: ${style.input.color.onFocus};
  }
`;