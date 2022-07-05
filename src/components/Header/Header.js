import styled from 'styled-components/macro'

export const HeaderContainer = styled.header`
  width: 100%;
  background: var(--light-blue);
  height: auto;
  padding: 0 40px;
  display: flex;
  min-height: 65px;
  min-width: 100vw;
  & > h1 {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`
export const HeaderLogo = styled.img`
  height: clamp(30px, 2.5vw, 40px);
  margin: 20px 0;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: 10 0;
  }
`

export const Profile = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 1040px) {
    display: ${(props) => (props.open ? 'none' : 'flex')};
  }
`

export const ProfileImage = styled.img`
  height: 32px;
  margin: 0 10px 0 20px;
`

export const ProfileDropButton = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileName = styled.p`
  color: var(--grey);
  font-size: clamp(1rem, 1vw, 1.3rem);
`

export const Arrow = styled.span`
  border-left: 4.3px solid transparent;
  border-right: 4.3px solid transparent;
  border-top: 4.3px solid #8197a4;
  margin: 9px;
  transition: 100ms ease-in transform;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(360deg)')};
`

export const LogOutButton = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 200px;
  position: absolute;
  background-color: var(--lighter-blue);
  right: 20px;
  top: 80px;
`
