import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'

import { render,fireEvent } from '@testing-library/react'

it('should display navbar', () => {
  const { queryByTestId } = render(<NavBar />)

  expect(queryByTestId('NavBar')).toBeTruthy()
})

it('should display categories', () => {
    const { queryByTestId } = render(<NavBar />)
    const categoriesButton =  queryByTestId('categoriesButton')

    fireEvent.click(categoriesButton, "click")
  
    expect(queryByTestId('categories')).toBeVisible()
  })
  