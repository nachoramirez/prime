import styled from 'styled-components/macro'

export const SearchContainter = styled.form`
  align-self: center;
  height: 39px;
  width: 30%;
  max-width: 300px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 100ms ease-in-out width;
  float: right;

  @media screen and (max-width: 1040px) {
    position: ${(props) => (props.open ? 'absolute' : 'relative')};
    right: ${(props) => (props.open ? '10px' : '0')};
    justify-content: end;
    max-width: none;
    width: ${(props) => (props.open ? '100%' : '0')};
    z-index: 10;
    background-color: var(--light-blue);
  }
`

export const SearchInput = styled.input`
  cursor: inherit;
  height: 100%;
  width: 100%;
  border: 1px solid rgba(129, 151, 164, 0.5);
  padding: 0 30px;
  background-color: transparent;
  color: var(--grey);
  font-weight: 700;
  font-size: 1.15rem;
  caret-color: var(--white);
  &:focus {
    outline: none;
    border: 2px solid var(--white);
  }

  @media screen and (max-width: 1040px) {
    padding: ${(props) => (props.open ? ' 0 30px' : '10px')};
    background-color: ${(props) => (props.open ? 'var(--dark-blue)' : '')};
    border: ${(props) =>
      props.open ? '1px solid rgba(129, 151, 164, 0.5)' : 'none'};
    width: ${(props) => (props.open ? '100%' : '0')};
    background-color: ${(props) => (props.open ? 'var(--dark-blue)' : '')};
  }
`

export const SearchButton = styled.img`
  height: 20px;
  padding: 0 5px;
  transform: translate(30px);
`

export const CloseButton = styled.img`
  display: none;
  @media screen and (max-width: 1040px) {
    height: 38px;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`

export const CleanButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  background-image: url(${(props) => props.src || ''});
  background-repeat: no-repeat;

  filter: opacity(0.4);
  height: 20px;
  width: 20px;
  display: block;
  position: absolute;
  right: -20px;
  transform: translate(-25px);
  display: ${(props) => (props.show ? 'block' : 'none')};
  @media screen and (max-width: 1040px) {
    height: 20px;
    position: relative;
    display: ${(props) => (props.open && props.show ? 'block' : 'none')};
    transform: translate(-50px);
  }
`
