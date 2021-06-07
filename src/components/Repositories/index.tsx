import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'

import { ClipboardNotification, Container, Description, Footer, FooterText, Header, Link, Repository, Title } from './styles'

interface Repositories{
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  git_url: string;
  html_url: string;
}

export default function Repositories({repositories}: {repositories: Array<Repositories>}):JSX.Element {
  const [ hasActive, setHasActive ] = useState(false)

  const dataFilter = (dataString:string) => {
    const data = new Date(dataString)
    return `${data.getMonth()}/${data.getDate()}/${data.getFullYear()}`
  }

  const clickHandler = ({ git_url }: { git_url: string }) => {
    copy(git_url)
    setHasActive(true)
  }

  return (
    <Container>
      {
        repositories.map((repo, index) => {
          return(
            <>
            <Repository key={index}>
              <Header>
                <Title>
                  <Link href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</Link>
                </Title>
                <FontAwesomeIcon icon={faClone} onClick={ () => clickHandler(repo)}/> 
              </Header>
              <Description>
                {repo.description}
              </Description>
              <Footer>
                <FooterText>Created at: {dataFilter(repo.created_at)}</FooterText>
                <FooterText>Language: {repo.language || 'none'}</FooterText>
                <FooterText>Updated at: {dataFilter(repo.updated_at)}</FooterText>
              </Footer>
            </Repository>
            { hasActive && 
              <ClipboardNotification  
              active={hasActive}
              onAnimationEnd={ () => setHasActive(false)}
              >
                {`Link copied!`}
              </ClipboardNotification>
            }
            </>
          )
        })
      }
    </Container>
  )
}
