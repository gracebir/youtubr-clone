import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch,AiOutlineAppstore } from 'react-icons/ai'
import { BiVideoPlus} from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaCircle} from 'react-icons/fa'
import Logo from '../../../public/assets/youtube-logo.webp'
import Image from 'next/image'


const Nav = styled.nav`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;
    border-bottom: .5px solid #ebebeb;
`

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`

const InputContain = styled.div`
  margin: 0;
  padding: 0;
  height: 35px;
`

const SearchInput = styled.input`
  padding: .5em 1em;
  width: 500px;
  max-width: 80%;
  height: 100%;
  border: 1px solid #ddd;
`

const ButtonSearch = styled.button`
  height: 100%;
  padding: .4em 1em;
  border: none;
  margin: 0;
  cursor: pointer;
`

const HomeLink = styled.a`
    cursor: pointer;
`

const NavIcons = styled.div`
  display: flex;
  gap:.5em;
`

// https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_Youtube_%282015-2017%29.svg
function NavBar() {
  return (
    <Nav>
      <LeftSide>
          <GiHamburgerMenu cursor="pointer" size={30}/>
          <HomeLink>
           <Image
           src={Logo}
           width='90px'
           height='30px'
           />
          </HomeLink>
      </LeftSide>
      <InputContain>
        <SearchInput placeholder='Search' type='search'/>
        <ButtonSearch>
          <AiOutlineSearch/>
        </ButtonSearch>
      </InputContain>
      <NavIcons>
          <BiVideoPlus size={25} cursor='pointer'/>
          <AiOutlineAppstore size={25} cursor='pointer'/>
          <IoIosNotificationsOutline size={25} cursor='pointer'/>
          <FaCircle size={25}/>
      </NavIcons>
    </Nav>
  )
}

export default NavBar
