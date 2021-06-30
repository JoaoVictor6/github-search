import React from "react";
import copy from "copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";

import {
  PopUp,
  Container,
  Description,
  Footer,
  FooterText,
  Header,
  Link,
  Repository,
  Title,
  Icon,
} from "./styles";

interface Repositories {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  git_url: string;
  html_url: string;
}

export default function Repositories({
  repositories,
}: {
  repositories: Array<Repositories>;
}): JSX.Element {
  const dataFilter = (dataString: string) => {
    const data = new Date(dataString);
    return `${data.getMonth()}/${data.getDate()}/${data.getFullYear()}`;
  };

  const clickHandler = ({ git_url }: { git_url: string }) => {
    copy(git_url);
  };

  return (
    <Container>
      {repositories.map((repo, index) => {
        return (
          <>
            <Repository key={index}>
              <Header>
                <Title>
                  <Link href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </Link>
                </Title>
                <Icon>
                  <PopUp>Copy</PopUp>
                  <FontAwesomeIcon
                    icon={faClone}
                    onClick={() => clickHandler(repo)}
                  />
                </Icon>
              </Header>
              <Description>{repo.description}</Description>
              <Footer>
                <FooterText>
                  Created at: {dataFilter(repo.created_at)}
                </FooterText>
                <FooterText>Language: {repo.language || "none"}</FooterText>
                <FooterText>
                  Updated at: {dataFilter(repo.updated_at)}
                </FooterText>
              </Footer>
            </Repository>
          </>
        );
      })}
    </Container>
  );
}
