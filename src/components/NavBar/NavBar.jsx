import React, { useState } from 'react'
import { Arrow } from '../Header/Header'

import {
  NavBarContainer,
  ExploreContainer,
  ExploreButton,
  NavigationBars,
  NavItem,
  SubDropDown,
  HeaderCategories,
  PrincipalCategories,
  CategoriesContainer,
  CategoriesSeparator,
  PricipalCategory,
  CategoryList,
  CategoryItem,
  RightCategories,
  OtherCategories,
} from './NavBar.js'

const genres = [
  'Acción',
  'Aventura',
  'Animación',
  'Comedia',
  'Policial',
  'Documental',
  'Drama',
  'Familia',
  'Fantasía',
  'Historia',
  'Horror',
  'Música',
  'Misterio',
  'Romance',
  'Ciencia ficción',
  'Película de televisión',
  'Suspenso',
  'Guerra',
  'Occidental',
]

export const NavBar = () => {
  const [exploreOpen, setExploreOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <NavBarContainer>
      <ExploreContainer onClick={() => setExploreOpen(!exploreOpen)}>
        <ExploreButton>Explorar</ExploreButton>
        <Arrow open={exploreOpen} />
      </ExploreContainer>
      <NavigationBars open={exploreOpen}>
        <li>
          <NavItem selected>Inicio</NavItem>
        </li>
        <li>
          <NavItem>Series</NavItem>
        </li>
        <li>
          <NavItem>Películas</NavItem>
        </li>
        <li>
          <SubDropDown onClick={() => setCategoriesOpen(!categoriesOpen)}>
            <NavItem>Categorias</NavItem>
            <Arrow open={categoriesOpen} />
          </SubDropDown>
        </li>
        <HeaderCategories open={categoriesOpen}>
          <CategoriesContainer>
            <h3>Categorías principales</h3>
            <PrincipalCategories>
              <li>
                <PricipalCategory>Amazon Originals</PricipalCategory>
              </li>
              <li>
                <PricipalCategory>Infantil</PricipalCategory>
              </li>
              <li>
                <PricipalCategory>
                  Películas añadidas recientemente
                </PricipalCategory>
              </li>
              <li>
                <PricipalCategory>
                  Series añadidas recientemente
                </PricipalCategory>
              </li>
            </PrincipalCategories>
          </CategoriesContainer>
          <CategoriesSeparator />
          <CategoriesContainer>
            <RightCategories>
              <div>
                <h3>Géneros</h3>
                <CategoryList>
                  {genres.map((item) => (
                    <li>
                      <CategoryItem>{item}</CategoryItem>
                    </li>
                  ))}
                </CategoryList>
              </div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Otras categorías</h3>
                <ul>
                  <li style={{ marginBottom: '15px' }}>
                    <CategoryItem>Genre</CategoryItem>
                  </li>
                  <li>
                    <CategoryItem>Ciencia ficcion</CategoryItem>
                  </li>
                </ul>
              </div>
            </RightCategories>
          </CategoriesContainer>
        </HeaderCategories>
      </NavigationBars>
    </NavBarContainer>
  )
}
