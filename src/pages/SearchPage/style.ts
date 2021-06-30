import styled from "styled-components";

interface ActivityProps {
  active: boolean;
}

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

  width: calc(342px - 56px - 30px);
  font-size: 20px;
  color: ${(props: ActivityProps) => (props.active ? "#0069CA" : "#9d9d9d")};

  border-radius: 50px 0 0 50px;
  padding: 15px 0px 15px 30px;
  outline: none;
`;

export const Form = styled.form`
  transition: color 0.5s;
  transition: border-color 0.1s;
  display: flex;
  border-style: none;
  background: transparent;
  border-radius: 50px;

  width: 342px;
  border: 1px solid #9d9d9d;
  border-color: ${(props: ActivityProps) =>
    props.active ? "#2E9BFF" : "#9d9d9d"};
  font-size: 20px;
  color: #9d9d9d;

  &:hover {
    border-color: #0069ca;

    && > button > svg {
      color: ${(props: ActivityProps) =>
        props.active ? "#ffffff" : "#0069CA"};
    }
  }
`;

export const Button = styled.button`
  border-style: none;
  background: transparent;
  color: #9d9d9d;
  border-radius: 100%;
  margin: 6px;
  width: 50px;
  height: 50px;
  background-color: ${(props: ActivityProps) =>
    props.active ? "#2E9BFF" : "transparent"};
  transition: background-color 0.1s;
  color: ${(props: ActivityProps) => (props.active ? "#ffffff" : "#9d9d9d")};

  &:hover {
    cursor: pointer;
    color: #0069ca;
  }
`;
