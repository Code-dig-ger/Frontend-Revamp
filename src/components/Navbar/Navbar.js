import React, { useState } from 'react'
import logo from './Logo.png'
import styled from '@emotion/styled'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  width: 100vw;
  height: 4rem;
  background-color: #0d0e0e;
  // background-color: grey;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`

const LogoDiv = styled.div`
  display: flex;
  & img {
    height: 3rem;
  }
`

const RightBar = styled.div`
  display: flex;
  & span {
    display: none;
  }

  @media (max-width: 1000px) {
    & span {
      display: block;
      position: relative;
      top: 1rem;
    }
  }
`

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`
const ListItem = styled.li`
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  &:hover {
    color: #35ae9a;
  }

  &:after {
    position: relative;
    left: 31%;
    display: block;
    content: '';
    width: 40%;
    border-bottom: solid 2px #35ae9a;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }

  &:last-child:after {
    border: none;
  }
  &:last-child:hover:after {
    color: #35ae9a;
  }
`

function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <LogoDiv>
          <img src={logo} alt="logo" />
        </LogoDiv>
        <RightBar>
          <MenuOutlined
            style={{
              // display: 'none',
              fontSize: '25px',
            }}
          />
          <List>
            <ListItem>Problems</ListItem>
            <ListItem>Practice</ListItem>
            <ListItem>Ladder</ListItem>
            <ListItem>Upsolve</ListItem>
            <ListItem>Contest</ListItem>
            <ListItem>
              <UserOutlined style={{ color: 'white', fontSize: '1rem' }} />
            </ListItem>
          </List>
        </RightBar>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
