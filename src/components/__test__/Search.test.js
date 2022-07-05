import React from 'react'
import Search from '../Search/Search.jsx'

import { render, fireEvent } from '@testing-library/react'

it('should display the clean button', () => {
  const { queryByPlaceholderText, queryByTestId } = render(<Search />)
  const inputElement = queryByPlaceholderText('Buscar')

  fireEvent.change(inputElement, { target: { value: 'Hola' } })

  expect(inputElement.value).toBe('Hola')
  expect(queryByTestId('clean')).toBeVisible()
})

it('should clean the input', () => {
    const { queryByPlaceholderText, queryByTestId } = render(<Search />)
    const inputElement = queryByPlaceholderText('Buscar')
    const cleanButton = queryByTestId('clean')
  
    fireEvent.change(inputElement, { target: { value: 'Hola' } })
    fireEvent.click(cleanButton)
  
    expect(inputElement.value).toBe('')
  })
