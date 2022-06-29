import React, { useState, useRef, useEffect } from 'react'
import {
  HeaderContainer,
  HeaderLogo,
  SearchInput,
  SearchContainter,
  SearchIcon,
  CloseButton,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileDropButton,
  Arrow,
} from './Header'

import Logo from '../../static/primeLogo.svg'
import Search from '../../static/searchIcon.svg'
import ProfileSrc from '../../static/profileImage.png'
import CloseIcon from '../../static/closeIcon.svg'

import { NavBar } from '../NavBar/NavBar.jsx'
import { useOutsideClick } from '../../hooks/useOutsideClick'

const Header = () => {
  const [searchOpen, setOpenSearch] = useState(false)
  const ref = useRef(null)

  useOutsideClick(ref, setOpenSearch)

  return (
    <HeaderContainer>
      <HeaderLogo  src={Logo} alt='prime video logo' />
      <NavBar />
      <SearchContainter ref={ref} open={searchOpen}>
        <SearchIcon onClick={() => setOpenSearch(true)} src={Search} />
        <SearchInput open={searchOpen} placeholder='Buscar' />
        <CloseButton
          onClick={() => setOpenSearch(false)}
          open={searchOpen}
          src={CloseIcon}
        />
      </SearchContainter>
      <Profile >
        <ProfileImage src={ProfileSrc} />
        <ProfileDropButton>
          <ProfileName>Perfil</ProfileName>
          <Arrow open={false}/>
        </ProfileDropButton>
      </Profile>
    </HeaderContainer>
  )
}

export default Header
