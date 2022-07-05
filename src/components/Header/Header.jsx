import React, { useState, useRef, useEffect } from 'react'
import {
  HeaderContainer,
  HeaderLogo,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileDropButton,
  Arrow,
  LogOutButton,
} from './Header'

import Logo from '../../static/primeLogo.svg'
import ProfileSrc from '../../static/profileImage.png'

import NavBar from '../NavBar/NavBar.jsx'
import Search from '../Search/Search.jsx'

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false)
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt='prime video logo' />
      <NavBar />
      <Search />
      <Profile>
        <ProfileImage src={ProfileSrc} />
        <ProfileDropButton onClick={() => setProfileOpen(!profileOpen)}>
          <ProfileName>Perfil</ProfileName>
          <Arrow open={profileOpen} />
        </ProfileDropButton>
        <LogOutButton open={profileOpen}>
          <h4> Cerrar sesion</h4>
        </LogOutButton>
      </Profile>
    </HeaderContainer>
  )
}

export default Header
