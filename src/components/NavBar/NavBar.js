import styled from 'styled-components/macro'
import categoryPhoto from '../../static/amazonCategory.png'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 768px) {
    margin: 0 15px;
  }
`

export const ExploreContainer = styled.span`
  cursor: pointer;
  display: none;
  align-items: flex-end;
  & > span {
    margin: 5px 7px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const ExploreButton = styled.a`
  color: var(--grey);
  margin-left: 0 30px;
`

export const NavigationBars = styled.ul`
  width: 50%;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: none;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: absolute;
    width: 100%;
    background-color: var(--lighter-blue);
    height: auto;
    padding: 0 10px;
    flex-direction: column;
    justify-content: space-between;
    top: 70px;
    right: 0;
    & > li {
      width: 100vw;
      border-bottom: 1px solid var(--grey);
      padding: 12px;
    }
  }
`

export const NavItem = styled.a`
  margin: 5px;
  font-weight: 700;
  font-size: clamp(14px, 2vw, 18px);
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--grey)')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  text-underline-offset: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: clamp(19px, 2vw, 22px);
    text-decoration: none;
  }
`
export const SubDropDown = styled.span`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  & > a {
    margin: 0 5px;
  }
  & > span {
    margin: 5px 0;
  }
`

export const HeaderCategories = styled.div`
  position: absolute;
  background: rgb(18, 35, 49);
  background: linear-gradient(
    140deg,
    rgba(18, 35, 49, 1) 0%,
    rgba(15, 23, 30, 1) 100%
  );
  right: 0;
  top: 70px;
  width: 100%;
  height: auto;
  display: ${(props) => (props.open ? 'grid' : 'none')};
  grid-template-columns: minmax(400px, 600px) 20px minmax(400px, 600px);
  justify-content: center;
  padding: 10px 50px 30px 50px;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    top: 197px;
    padding: 0;
    font-size: 0.85rem;
  }
`
export const CategoriesContainer = styled.div`
  width: 100%;
  & > h3 {
    margin-left: 30px;
    @media screen and (max-width: 768px) {
      margin-left: 20px;
    }
  }
`

export const CategoriesSeparator = styled.div`
  justify-self: center;
  align-self: flex-end;
  height: 100%;
  width: 1px;
  background-color: var(--grey);
`

export const PrincipalCategories = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 160px));
  grid-gap: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 20px;
  }
`

export const PricipalCategory = styled.a`
  background: url(${categoryPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;

  &:hover {
    border: solid 2px white;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    background: none;
    height: auto;
    width: auto;
    text-align: left;
    display: block;
    font-weight: lighter;

    color: var(--grey);
    transition: color 0.2s ease-in-out;
    font-size: 1rem;
    cursor: pointer;
    padding: 6px 0;
    &:hover {
      border: none;
      color: var(--white);
    }
  }
`

export const RightCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div:first-of-type {
    width: 420px;
  }
  & > div > h3 {
    margin-left: 30px;
    @media screen and (max-width: 768px) {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & > div:first-of-type {
    width: 100%;
  }
  }
`

export const CategoryList = styled.ul`
  column-count: 2;
  column-gap: 48px;
  & > * {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    column-count: 1;
    column-gap: 48px;
  }
`

export const CategoryItem = styled.a`
  color: var(--grey);
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--white);
  }
`

export const OtherCategories = styled.div`
  width: 40px;
`
