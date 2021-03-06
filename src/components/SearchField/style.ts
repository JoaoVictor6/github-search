import styled from "styled-components";

export const Form = styled.form`
  margin: auto;
  margin-top: 20px;
  width: 300px;
  background: #c4c4c4;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 0px 0px -1px #545454;
`;

export const TextField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin: 14px 0 14px 20px;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  font-family: Nunito, sans-serif;
  color: #515151;
`;
interface PropsActivate {
  active: boolean;
}

export const Button = styled.button`
  border-style: none;

  margin: auto;
  text-align: center;
  background-color: transparent;
  width: 60px;
  transition: color 1s;
  && > svg {
    background-color: transparent;
    color: ${(props: PropsActivate) => (props.active ? "#8E8686" : "#515151")};
  }

  && > svg:hover {
    cursor: pointer;
    color: #515151;
  }
`;
