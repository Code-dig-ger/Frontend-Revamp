import React from 'react'
import { Divider } from 'antd'
import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #0d0e0e;
  color: white;
`
const FooterFlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 50vw;
  padding: 0 3rem;
`
const FooterColumn = styled.div`
  padding: 1rem;
`
const Heading = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: solid 1px #35ae9a;
  color: #35ae9a;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.a`
  font-size: 0.9rem;
  color: inherit;
  &:hover {
    color: #35ae9a;
  }
`
const LogoItem = styled.a`
  font-size: 1.7rem;
  padding: 1rem 1rem 0 0;
  color: inherit;
  &:hover {
    color: #35ae9a;
  }
`

const Copyright = styled.h4``

function Footer() {
  return (
    <FooterWrapper>
      <FooterFlexWrapper>
        <FooterColumn>
          <Heading>Links</Heading>
          <List>
            <Item href="https://codedigger.tech/">Home</Item>
            <Item href="https://codedigger.tech/aboutus">About Us</Item>
            <Item href="https://codedigger.tech/privacy">Privacy Policy</Item>
            <Item href="https://codedigger.tech/terms">Terms of Service</Item>
          </List>
        </FooterColumn>
        <Divider type="vertical" />
        <FooterColumn>
          <Heading>Contact Us</Heading>
          <List>
            <Item href="mailto:contact.codedigger@gmail.com">Mail Us</Item>
            <Item href="https://forms.gle/cL9ECdGDf6njYhV66">
              Submit a feedback
            </Item>
          </List>
        </FooterColumn>
        <Divider type="vertical" />
        <FooterColumn>
          <Heading>Follow Us</Heading>
          <List>
            <div>
              <LogoItem href="https://www.facebook.com/practicewithcodedigger">
                <FacebookOutlined />
              </LogoItem>
              <LogoItem href="https://www.linkedin.com/company/codedigger">
                <LinkedinOutlined />
              </LogoItem>
            </div>
            <div>
              <LogoItem href="https://github.com/Code-dig-ger">
                <GithubOutlined />
              </LogoItem>
              <LogoItem href="https://www.youtube.com/channel/UCY5XRYpEGKT9cpzZmfWvh6A">
                <YoutubeOutlined />
              </LogoItem>
            </div>
          </List>
        </FooterColumn>
      </FooterFlexWrapper>
      <Copyright>Codedigger ©2021</Copyright>
    </FooterWrapper>
  )
}

export default Footer
