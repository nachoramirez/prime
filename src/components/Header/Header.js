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
    padding:0 10px;
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

export const SearchContainter = styled.form`
  align-self: center;
  height: 39px;
  width: 30%;
  max-width: 300px;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(129, 151, 164, 0.5);

  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 100ms ease-in-out width;
  float: right;

  @media screen and (max-width: 1040px) {
    position: ${(props) => (props.open ? 'absolute' : 'relative')};
    right: ${(props) => (props.open ? '50px' : '0')};
    border: ${(props) =>
      props.open ? '1px solid rgba(129, 151, 164, 0.5)' : 'none'};
    justify-content: end;
    max-width: none;
    width: ${(props) => (props.open ? '92%' : '0')};
    background-color: ${(props) => (props.open ? 'var(--dark-blue)' : '')};
    z-index: 10;
  }
  @media screen and (max-width: 590px) {
    width: ${(props) => (props.open ? '85%' : '0')};

  }
`

export const SearchInput = styled.input`
  cursor: inherit;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: var(--grey);
  font-weight: 700;
  font-size: 1.15rem;
  border: none;
  caret-color: var(--white);
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1040px) {
    width: ${(props) => (props.open ? '100%' : '0')};
    background-color: ${(props) => (props.open ? 'var(--dark-blue)' : '')};
  }
`

export const SearchIcon = styled.img`
  height: 60%;
  padding: 0 5px;
`

export const CloseButton = styled.img`
  display: none;
  @media screen and (max-width: 1040px) {
    height: 38px;
    position: relative;
    right: -49px;
    display: ${(props) => (props.open ? 'flex' : 'none')};
    background-color: var(--light-blue);
    padding: 5px;
    border-right: 10px var(--light-blue) solid;
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
    display: none
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
