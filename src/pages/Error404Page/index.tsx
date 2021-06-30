import React from "react";
import SearchField from "../../components/SearchField";

import { Body, Container, TextContainer } from "./styles";
import Textsvg from "./svg/Textsvg";

const Error404Page: React.FC = () => {
  document.title = "User not found";

  return (
    <>
      <Body />
      <Container>
        <SearchField />
        <TextContainer>
          <Textsvg />
        </TextContainer>
      </Container>
    </>
  );
};

export default Error404Page;
